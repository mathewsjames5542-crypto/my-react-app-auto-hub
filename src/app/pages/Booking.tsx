import { useState } from "react";
import { Calendar, CheckCircle, Clock, ExternalLink, LoaderCircle } from "lucide-react";
import { toast } from "sonner";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { Checkbox } from "../components/ui/checkbox";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";

const BOOKING_URL =
  "https://www.mechanicdesk.com.au/online-booking/67f0240abb8bd7b564fd3bce081ec4a922d4e3e5";

const BOOKING_API_URL =
  "https://www.mechanicdesk.com.au/booking_requests/create_booking?Token=67f0240abb8bd7b564fd3bce081ec4a922d4e3e5";

const BOOKING_TOKEN = "67f0240abb8bd7b564fd3bce081ec4a922d4e3e5";
const SUCCESS_MESSAGE = "Thank you for your booking request.";

const JOB_TYPE_OPTIONS = [
  "Brake Systems",
  "Cooling Systems",
  "Diagnostics",
  "Electrical Repairs",
  "Engine Service",
  "Oil Service",
  "Steering & Suspension",
  "Transmission Service",
  "WOF Inspection",
];

type BookingFormData = {
  name: string;
  phone: string;
  email: string;
  dropOffTime: string;
  pickupTime: string;
  registrationNumber: string;
  make: string;
  model: string;
  year: string;
  note: string;
  jobTypeNames: string[];
};

const initialFormData: BookingFormData = {
  name: "",
  phone: "",
  email: "",
  dropOffTime: "",
  pickupTime: "",
  registrationNumber: "",
  make: "",
  model: "",
  year: "",
  note: "",
  jobTypeNames: [],
};

function formatMechanicDeskDate(value: string) {
  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return "";
  }

  const month = date.getMonth() + 1;
  const day = date.getDate();
  const year = date.getFullYear();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");

  return `${month}/${day}/${year} ${hours}:${minutes}`;
}

export function Booking() {
  const [formData, setFormData] = useState<BookingFormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const updateField = (field: keyof BookingFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const toggleJobType = (jobType: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      jobTypeNames: checked
        ? [...prev.jobTypeNames, jobType]
        : prev.jobTypeNames.filter((item) => item !== jobType),
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.phone ||
      !formData.email ||
      !formData.dropOffTime ||
      !formData.pickupTime ||
      !formData.registrationNumber ||
      !formData.make ||
      !formData.model ||
      !formData.year ||
      formData.jobTypeNames.length === 0
    ) {
      toast.error("Please fill in all required booking details.");
      return;
    }

    const dropOffTime = formatMechanicDeskDate(formData.dropOffTime);
    const pickupTime = formatMechanicDeskDate(formData.pickupTime);

    if (!dropOffTime || !pickupTime) {
      toast.error("Please provide valid drop-off and pickup times.");
      return;
    }

    setIsSubmitting(true);

    try {
      const payload = new URLSearchParams();

      payload.append("name", formData.name);
      payload.append("phone", formData.phone);
      payload.append("email", formData.email);
      payload.append("drop_off_time", dropOffTime);
      payload.append("pickup_time", pickupTime);
      payload.append("registration_number", formData.registrationNumber);
      payload.append("make", formData.make);
      payload.append("model", formData.model);
      payload.append("year", formData.year);
      payload.append("note", formData.note);
      payload.append("token", BOOKING_TOKEN);
      payload.append("version", "2");

      formData.jobTypeNames.forEach((jobType) => {
        payload.append("job_type_names[]", jobType);
      });

      await fetch(BOOKING_API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
        },
        mode: "no-cors",
        body: payload.toString(),
      });

      setIsSubmitted(true);
      setFormData(initialFormData);
      toast.success(SUCCESS_MESSAGE);
    } catch (error) {
      const message =
        error instanceof Error && error.message
          ? error.message
          : "We could not submit your booking request right now.";

      toast.error(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="w-full">
        <section className="bg-gradient-to-br from-[#000000] via-[#0A0A0A] to-[#000000] py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <Card className="bg-[#262626] border-[#0368D3]/20 p-8 md:p-12 text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-[#0368D3]/20 rounded-full mb-6 mx-auto">
                  <CheckCircle className="text-[#0368D3]" size={48} />
                </div>
                <h1 className="text-3xl md:text-4xl font-bold text-[#DEDEDE] mb-4">
                  {SUCCESS_MESSAGE}
                </h1>
                <p className="text-[#A0A0A0] mb-8">
                  Our team will review your request and get in touch with you shortly.
                </p>
                <Button
                  className="bg-[#0368D3] hover:bg-[#0368D3]/90 text-[#DEDEDE]"
                  onClick={() => setIsSubmitted(false)}
                >
                  Make Another Booking
                </Button>
              </Card>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="w-full">
      <section className="bg-gradient-to-br from-[#000000] via-[#0A0A0A] to-[#000000] py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-[#DEDEDE] mb-6">
              Online Booking
            </h1>
            <p className="text-lg text-[#A0A0A0]">
              Send your booking request directly to our workshop. Fill in your
              vehicle details, preferred times, and service needs below.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#000000]">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1.4fr_0.8fr] gap-8">
            <Card className="bg-[#262626] border-[#0368D3]/20 p-6 md:p-8">
              <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-[#DEDEDE]">
                    Book a Service
                  </h2>
                  <p className="text-[#A0A0A0] mt-2">
                    Complete the form and we will receive your booking request through Mechanic Desk.
                  </p>
                </div>
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-md border border-[#0368D3]/40 bg-[#0368D3]/10 px-4 py-2 text-[#DEDEDE] transition-colors hover:bg-[#0368D3]/20"
                >
                  Open Original Booking Page
                  <ExternalLink size={18} />
                </a>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-[#DEDEDE]">
                      Full Name *
                    </Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => updateField("name", e.target.value)}
                      placeholder="Your full name"
                      className="bg-[#1D1D1D] border-[#0368D3]/20 text-[#DEDEDE] focus:border-[#0368D3]"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-[#DEDEDE]">
                      Phone Number *
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => updateField("phone", e.target.value)}
                      placeholder="+64 792 59984"
                      className="bg-[#1D1D1D] border-[#0368D3]/20 text-[#DEDEDE] focus:border-[#0368D3]"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-[#DEDEDE]">
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => updateField("email", e.target.value)}
                      placeholder="your@email.com"
                      className="bg-[#1D1D1D] border-[#0368D3]/20 text-[#DEDEDE] focus:border-[#0368D3]"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="registrationNumber" className="text-[#DEDEDE]">
                      Registration Number *
                    </Label>
                    <Input
                      id="registrationNumber"
                      value={formData.registrationNumber}
                      onChange={(e) => updateField("registrationNumber", e.target.value)}
                      placeholder="ABC123"
                      className="bg-[#1D1D1D] border-[#0368D3]/20 text-[#DEDEDE] focus:border-[#0368D3]"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="make" className="text-[#DEDEDE]">
                      Vehicle Make *
                    </Label>
                    <Input
                      id="make"
                      value={formData.make}
                      onChange={(e) => updateField("make", e.target.value)}
                      placeholder="Toyota"
                      className="bg-[#1D1D1D] border-[#0368D3]/20 text-[#DEDEDE] focus:border-[#0368D3]"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="model" className="text-[#DEDEDE]">
                      Vehicle Model *
                    </Label>
                    <Input
                      id="model"
                      value={formData.model}
                      onChange={(e) => updateField("model", e.target.value)}
                      placeholder="Corolla"
                      className="bg-[#1D1D1D] border-[#0368D3]/20 text-[#DEDEDE] focus:border-[#0368D3]"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="year" className="text-[#DEDEDE]">
                      Year *
                    </Label>
                    <Input
                      id="year"
                      inputMode="numeric"
                      value={formData.year}
                      onChange={(e) => updateField("year", e.target.value)}
                      placeholder="2010"
                      className="bg-[#1D1D1D] border-[#0368D3]/20 text-[#DEDEDE] focus:border-[#0368D3]"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="dropOffTime" className="text-[#DEDEDE]">
                      Drop-off Time *
                    </Label>
                    <Input
                      id="dropOffTime"
                      type="datetime-local"
                      value={formData.dropOffTime}
                      onChange={(e) => updateField("dropOffTime", e.target.value)}
                      className="bg-[#1D1D1D] border-[#0368D3]/20 text-[#DEDEDE] focus:border-[#0368D3]"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="pickupTime" className="text-[#DEDEDE]">
                      Pickup Time *
                    </Label>
                    <Input
                      id="pickupTime"
                      type="datetime-local"
                      value={formData.pickupTime}
                      onChange={(e) => updateField("pickupTime", e.target.value)}
                      className="bg-[#1D1D1D] border-[#0368D3]/20 text-[#DEDEDE] focus:border-[#0368D3]"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <Label className="text-[#DEDEDE]">Service Type *</Label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3">
                    {JOB_TYPE_OPTIONS.map((jobType) => {
                      const checked = formData.jobTypeNames.includes(jobType);

                      return (
                        <label
                          key={jobType}
                          className="flex items-center gap-3 rounded-lg border border-[#0368D3]/20 bg-[#1D1D1D] px-4 py-3 text-[#DEDEDE] cursor-pointer hover:border-[#0368D3]"
                        >
                          <Checkbox
                            checked={checked}
                            onCheckedChange={(value) => toggleJobType(jobType, value === true)}
                          />
                          <span className="text-sm">{jobType}</span>
                        </label>
                      );
                    })}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="note" className="text-[#DEDEDE]">
                    Notes
                  </Label>
                  <Textarea
                    id="note"
                    value={formData.note}
                    onChange={(e) => updateField("note", e.target.value)}
                    placeholder="Tell us about the issue or service required"
                    className="bg-[#1D1D1D] border-[#0368D3]/20 text-[#DEDEDE] focus:border-[#0368D3] min-h-[140px]"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-[#0368D3] hover:bg-[#0368D3]/90 text-[#DEDEDE] w-full md:w-auto px-8 py-6"
                >
                  {isSubmitting ? (
                    <>
                      <LoaderCircle className="mr-2 animate-spin" size={18} />
                      Sending Booking Request...
                    </>
                  ) : (
                    "Submit Booking Request"
                  )}
                </Button>
              </form>
            </Card>

            <div className="space-y-6">
              <Card className="bg-[#262626] border-[#0368D3]/20 p-6 text-center">
                <Clock className="text-[#0368D3] mx-auto mb-3" size={32} />
                <h3 className="text-[#DEDEDE] font-semibold mb-2">
                  Flexible Scheduling
                </h3>
                <p className="text-[#A0A0A0] text-sm">
                  Choose drop-off and pickup times that suit your day.
                </p>
              </Card>

              <Card className="bg-[#262626] border-[#0368D3]/20 p-6 text-center">
                <CheckCircle className="text-[#0368D3] mx-auto mb-3" size={32} />
                <h3 className="text-[#DEDEDE] font-semibold mb-2">
                  Direct Workshop Request
                </h3>
                <p className="text-[#A0A0A0] text-sm">
                  Your request is submitted in the booking payload format you provided.
                </p>
              </Card>

              <Card className="bg-[#262626] border-[#0368D3]/20 p-6 text-center">
                <Calendar className="text-[#0368D3] mx-auto mb-3" size={32} />
                <h3 className="text-[#DEDEDE] font-semibold mb-2">
                  Original Booking Fallback
                </h3>
                <p className="text-[#A0A0A0] text-sm mb-4">
                  If the API blocks browser requests, you can still use the original booking page.
                </p>
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-[#0368D3] hover:text-[#0368D3]/80 transition-colors"
                >
                  Open MechanicDesk
                  <ExternalLink size={16} />
                </a>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
