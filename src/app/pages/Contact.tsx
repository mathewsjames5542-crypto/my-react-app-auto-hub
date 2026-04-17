import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import { toast } from "sonner";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all required fields");
      return;
    }

    setIsSubmitted(true);
    toast.success("Message sent successfully!");
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["1/70 Truman Lane", "Mount Maunganui 3175"],
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["079259984", "Mon-Sat: 8am-6pm"],
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["info@autohub.nz", "service@autohub.nz", "24/7 Support"],
    },
    {
      icon: Clock,
      title: "Opening Hours",
      details: ["Mon-Fri: 8am - 6pm", "Saturday: 8am - 4pm", "Sunday: Closed"],
    },
  ];

  if (isSubmitted) {
    return (
      <div className="w-full min-h-[80vh] flex items-center justify-center bg-[#000000]">
        <Card className="bg-[#262626] border-[#0368D3]/20 p-8 md:p-12 max-w-2xl mx-4 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-[#0368D3]/20 rounded-full mb-6 mx-auto">
            <CheckCircle className="text-[#0368D3]" size={48} />
          </div>
          <h2 className="text-3xl font-bold text-[#DEDEDE] mb-4">Message Sent!</h2>
          <p className="text-[#A0A0A0] mb-6">
            Thank you for contacting us, <span className="text-[#0368D3]">{formData.name}</span>! We've received your message and will get back to you shortly.
          </p>
          <p className="text-[#A0A0A0] mb-8">
            We typically respond within 24 hours. If you need immediate assistance, please call us at{" "}
            <span className="text-[#0368D3]">+64 9 123 4567</span>.
          </p>
          <Button 
            className="bg-[#0368D3] hover:bg-[#0368D3]/90 text-[#DEDEDE]"
            onClick={() => {
              setIsSubmitted(false);
              setFormData({
                name: "",
                email: "",
                phone: "",
                subject: "",
                message: "",
              });
            }}
          >
            Send Another Message
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
              Contact Us
            </h1>
            <p className="text-lg text-[#A0A0A0]">
              Have a question or need to schedule a service? We're here to help. Get in touch with our team today.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-gradient-to-b from-[#000000] to-[#0A0A0A]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="bg-[#262626] border-[#0368D3]/20 p-6 text-center hover:border-[#0368D3] transition-all duration-300">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-[#0368D3]/20 rounded-full mb-4 mx-auto">
                  <info.icon className="text-[#0368D3]" size={28} />
                </div>
                <h3 className="text-[#DEDEDE] font-semibold mb-3">{info.title}</h3>
                <div className="space-y-1">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-[#A0A0A0] text-sm">{detail}</p>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 bg-[#000000]">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <h2 className="text-3xl font-bold text-[#DEDEDE] mb-6">Send Us a Message</h2>
                <Card className="bg-[#262626] border-[#0368D3]/20 p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-[#DEDEDE]">Full Name *</Label>
                      <Input
                        id="name"
                        placeholder="Your name"
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
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        className="bg-[#1D1D1D] border-[#0368D3]/20 text-[#DEDEDE] focus:border-[#0368D3]"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-[#DEDEDE]">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+64 21 123 4567"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        className="bg-[#1D1D1D] border-[#0368D3]/20 text-[#DEDEDE] focus:border-[#0368D3]"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject" className="text-[#DEDEDE]">Subject</Label>
                      <Input
                        id="subject"
                        placeholder="How can we help?"
                        value={formData.subject}
                        onChange={(e) => handleInputChange("subject", e.target.value)}
                        className="bg-[#1D1D1D] border-[#0368D3]/20 text-[#DEDEDE] focus:border-[#0368D3]"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-[#DEDEDE]">Message *</Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us more about your inquiry..."
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                        className="bg-[#1D1D1D] border-[#0368D3]/20 text-[#DEDEDE] focus:border-[#0368D3] min-h-[150px]"
                        required
                      />
                    </div>

                    <Button 
                      type="submit" 
                      className="bg-[#0368D3] hover:bg-[#0368D3]/90 text-[#DEDEDE] w-full py-6"
                    >
                      <Send className="mr-2" size={18} />
                      Send Message
                    </Button>
                  </form>
                </Card>
              </div>

              {/* Map & Additional Info */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-[#DEDEDE] mb-6">Find Us</h2>
                  <Card className="bg-[#262626] border-[#0368D3]/20 overflow-hidden">
                    <div className="aspect-video bg-[#000000] relative">
                      {/* Map placeholder - in a real app, this would be an embedded Google Map */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                          <MapPin className="text-[#0368D3] mx-auto mb-4" size={48} />
                          <p className="text-[#DEDEDE] font-semibold mb-2">1/70 Truman Lane</p>
                          <p className="text-[#A0A0A0]">Mount Maunganui 3175.</p>
                        </div>
                      </div>
                      {/* You can replace this with an actual map iframe */}
                      <iframe
                        title="AutoHub Location"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3193.155634887753!2d174.76379431531805!3d-36.84846997993876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d0d47fb5a9ce6fb%3A0x4ca2ff3547b5dbf!2sAuckland%2C%20New%20Zealand!5e0!3m2!1sen!2sus!4v1647886400000!5m2!1sen!2sus"
                        className="absolute inset-0 w-full h-full opacity-50 hover:opacity-100 transition-opacity"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                      />
                    </div>
                  </Card>
                </div>

                <Card className="bg-[#262626] border-[#0368D3]/20 p-8">
                  <h3 className="text-xl font-bold text-[#DEDEDE] mb-4">Quick Response</h3>
                  <p className="text-[#A0A0A0] mb-4">
                    We aim to respond to all inquiries within 24 hours. For urgent matters, please call us directly during business hours.
                  </p>
                  <div className="space-y-3 pt-4 border-t border-[#0368D3]/20">
                    <div className="flex items-center gap-3">
                      <Phone className="text-[#0368D3] flex-shrink-0" size={20} />
                      <span className="text-[#DEDEDE]">079259984</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="text-[#0368D3] flex-shrink-0" size={20} />
                      <span className="text-[#DEDEDE]">info@autohub.nz</span>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-b from-[#000000] to-[#0A0A0A]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[#DEDEDE] mb-12 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              <Card className="bg-[#262626] border-[#0368D3]/20 p-6">
                <h3 className="text-lg font-semibold text-[#DEDEDE] mb-2">
                  Do I need to book an appointment?
                </h3>
                <p className="text-[#A0A0A0]">
                  While walk-ins are welcome, we recommend booking an appointment to ensure minimal wait time and availability of our technicians.
                </p>
              </Card>

              <Card className="bg-[#262626] border-[#0368D3]/20 p-6">
                <h3 className="text-lg font-semibold text-[#DEDEDE] mb-2">
                  What payment methods do you accept?
                </h3>
                <p className="text-[#A0A0A0]">
                  We accept EFTPOS, all major credit cards, and offer account facilities for commercial customers.
                </p>
              </Card>

              <Card className="bg-[#262626] border-[#0368D3]/20 p-6">
                <h3 className="text-lg font-semibold text-[#DEDEDE] mb-2">
                  Do you provide courtesy cars?
                </h3>
                <p className="text-[#A0A0A0]">
                  Yes, we offer courtesy vehicles for major repairs. Please let us know in advance so we can arrange one for you.
                </p>
              </Card>

              <Card className="bg-[#262626] border-[#0368D3]/20 p-6">
                <h3 className="text-lg font-semibold text-[#DEDEDE] mb-2">
                  How long does a typical service take?
                </h3>
                <p className="text-[#A0A0A0]">
                  Service times vary depending on the work required. A standard service typically takes 1-2 hours, while WOF inspections are usually completed within 30-45 minutes.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}