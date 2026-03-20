import { useState } from "react";
import { Calendar, Clock, CheckCircle, User, Mail, Phone, Car } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Textarea } from "../components/ui/textarea";
import { toast } from "sonner";

export function Booking() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    vehicle: "",
    service: "",
    date: "",
    time: "",
    notes: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const services = [
    "WOF Inspection",
    "Mechanical Repairs",
    "Auto Electrical",
    "Diagnostics",
    "Brake & Suspension",
    "Engine Repairs",
    "Oil Services",
  ];

  const timeSlots = [
    "8:00 AM",
    "9:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "1:00 PM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM",
    "5:00 PM",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!formData.name || !formData.email || !formData.phone || !formData.service || !formData.date || !formData.time) {
      toast.error("Please fill in all required fields");
      return;
    }

    // Simulate booking submission
    setIsSubmitted(true);
    toast.success("Booking request submitted successfully!");
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  if (isSubmitted) {
    return (
      <div className="w-full min-h-[80vh] flex items-center justify-center bg-[#000000]">
        <Card className="bg-[#262626] border-[#0368D3]/20 p-8 md:p-12 max-w-2xl mx-4 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-[#0368D3]/20 rounded-full mb-6 mx-auto">
            <CheckCircle className="text-[#0368D3]" size={48} />
          </div>
          <h2 className="text-3xl font-bold text-[#DEDEDE] mb-4">Booking Confirmed!</h2>
          <p className="text-[#A0A0A0] mb-6">
            Thank you, <span className="text-[#0368D3]">{formData.name}</span>! Your booking request has been received.
          </p>
          <div className="bg-[#000000] rounded-lg p-6 mb-6 text-left">
            <h3 className="text-[#DEDEDE] font-semibold mb-4">Booking Details:</h3>
            <div className="space-y-2 text-[#A0A0A0]">
              <p><span className="text-[#0368D3]">Service:</span> {formData.service}</p>
              <p><span className="text-[#0368D3]">Date:</span> {formData.date}</p>
              <p><span className="text-[#0368D3]">Time:</span> {formData.time}</p>
              <p><span className="text-[#0368D3]">Email:</span> {formData.email}</p>
            </div>
          </div>
          <p className="text-[#A0A0A0] mb-6">
            We'll send you a confirmation email shortly at <span className="text-[#0368D3]">{formData.email}</span>. 
            If you need to make any changes, please contact us directly.
          </p>
          <Button 
            className="bg-[#0368D3] hover:bg-[#0368D3]/90 text-[#DEDEDE]"
            onClick={() => {
              setIsSubmitted(false);
              setFormData({
                name: "",
                email: "",
                phone: "",
                vehicle: "",
                service: "",
                date: "",
                time: "",
                notes: "",
              });
            }}
          >
            Book Another Appointment
          </Button>
        </Card>
      </div>
    );
  }

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#000000] via-[#0A0A0A] to-[#000000] py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-[#DEDEDE] mb-6">
              Online Booking
            </h1>
            <p className="text-lg text-[#A0A0A0]">
              Book your appointment online - it's quick, easy, and convenient. Choose your preferred date and time, and we'll take care of the rest.
            </p>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-20 bg-[#000000]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-[#262626] border-[#0368D3]/20 p-8 md:p-12">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Personal Information */}
                <div>
                  <h2 className="text-2xl font-bold text-[#DEDEDE] mb-6 flex items-center gap-2">
                    <User className="text-[#0368D3]" size={28} />
                    Personal Information
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-[#DEDEDE]">Full Name *</Label>
                      <Input
                        id="name"
                        placeholder="John Smith"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        className="bg-[#1D1D1D] border-[#0368D3]/20 text-[#DEDEDE] focus:border-[#0368D3]"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-[#DEDEDE]">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        className="bg-[#1D1D1D] border-[#0368D3]/20 text-[#DEDEDE] focus:border-[#0368D3]"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-[#DEDEDE]">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+64 21 123 4567"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        className="bg-[#1D1D1D] border-[#0368D3]/20 text-[#DEDEDE] focus:border-[#0368D3]"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="vehicle" className="text-[#DEDEDE]">Vehicle Details</Label>
                      <Input
                        id="vehicle"
                        placeholder="e.g., 2020 Toyota Corolla"
                        value={formData.vehicle}
                        onChange={(e) => handleInputChange("vehicle", e.target.value)}
                        className="bg-[#1D1D1D] border-[#0368D3]/20 text-[#DEDEDE] focus:border-[#0368D3]"
                      />
                    </div>
                  </div>
                </div>

                {/* Service Selection */}
                <div>
                  <h2 className="text-2xl font-bold text-[#DEDEDE] mb-6 flex items-center gap-2">
                    <Car className="text-[#0368D3]" size={28} />
                    Service Required
                  </h2>
                  <div className="space-y-2">
                    <Label htmlFor="service" className="text-[#DEDEDE]">Select Service *</Label>
                    <Select value={formData.service} onValueChange={(value) => handleInputChange("service", value)}>
                      <SelectTrigger className="bg-[#1D1D1D] border-[#0368D3]/20 text-[#DEDEDE]">
                        <SelectValue placeholder="Choose a service" />
                      </SelectTrigger>
                      <SelectContent className="bg-[#262626] border-[#0368D3]/20">
                        {services.map((service) => (
                          <SelectItem 
                            key={service} 
                            value={service}
                            className="text-[#DEDEDE] focus:bg-[#0368D3]/20 focus:text-[#DEDEDE]"
                          >
                            {service}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Date & Time */}
                <div>
                  <h2 className="text-2xl font-bold text-[#DEDEDE] mb-6 flex items-center gap-2">
                    <Calendar className="text-[#0368D3]" size={28} />
                    Preferred Date & Time
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="date" className="text-[#DEDEDE]">Date *</Label>
                      <Input
                        id="date"
                        type="date"
                        value={formData.date}
                        onChange={(e) => handleInputChange("date", e.target.value)}
                        min={new Date().toISOString().split('T')[0]}
                        className="bg-[#1D1D1D] border-[#0368D3]/20 text-[#DEDEDE] focus:border-[#0368D3]"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="time" className="text-[#DEDEDE]">Time Slot *</Label>
                      <Select value={formData.time} onValueChange={(value) => handleInputChange("time", value)}>
                        <SelectTrigger className="bg-[#1D1D1D] border-[#0368D3]/20 text-[#DEDEDE]">
                          <SelectValue placeholder="Choose a time" />
                        </SelectTrigger>
                        <SelectContent className="bg-[#262626] border-[#0368D3]/20">
                          {timeSlots.map((time) => (
                            <SelectItem 
                              key={time} 
                              value={time}
                              className="text-[#DEDEDE] focus:bg-[#0368D3]/20 focus:text-[#DEDEDE]"
                            >
                              {time}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                {/* Additional Notes */}
                <div>
                  <Label htmlFor="notes" className="text-[#DEDEDE]">Additional Notes</Label>
                  <Textarea
                    id="notes"
                    placeholder="Please provide any additional information about your vehicle or service requirements..."
                    value={formData.notes}
                    onChange={(e) => handleInputChange("notes", e.target.value)}
                    className="bg-[#1D1D1D] border-[#0368D3]/20 text-[#DEDEDE] focus:border-[#0368D3] min-h-[120px] mt-2"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <Button 
                    type="submit" 
                    className="bg-[#0368D3] hover:bg-[#0368D3]/90 text-[#DEDEDE] w-full py-6 text-lg"
                  >
                    <CheckCircle className="mr-2" size={20} />
                    Confirm Booking
                  </Button>
                  <p className="text-[#A0A0A0] text-sm text-center mt-4">
                    * Required fields. We'll contact you to confirm your appointment.
                  </p>
                </div>
              </form>
            </Card>

            {/* Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <Card className="bg-[#262626] border-[#0368D3]/20 p-6 text-center">
                <Clock className="text-[#0368D3] mx-auto mb-3" size={32} />
                <h3 className="text-[#DEDEDE] font-semibold mb-2">Quick Response</h3>
                <p className="text-[#A0A0A0] text-sm">We'll confirm within 2 hours</p>
              </Card>
              <Card className="bg-[#262626] border-[#0368D3]/20 p-6 text-center">
                <CheckCircle className="text-[#0368D3] mx-auto mb-3" size={32} />
                <h3 className="text-[#DEDEDE] font-semibold mb-2">Easy Process</h3>
                <p className="text-[#A0A0A0] text-sm">Simple online booking form</p>
              </Card>
              <Card className="bg-[#262626] border-[#0368D3]/20 p-6 text-center">
                <Calendar className="text-[#0368D3] mx-auto mb-3" size={32} />
                <h3 className="text-[#DEDEDE] font-semibold mb-2">Flexible Scheduling</h3>
                <p className="text-[#A0A0A0] text-sm">Choose your preferred time</p>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}