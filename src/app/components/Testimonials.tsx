import { useState } from "react";
import { Star, ChevronLeft, ChevronRight, Send, MessageSquare } from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { toast } from "sonner";

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showFeedbackForm, setShowFeedbackForm] = useState(false);
  const [feedbackData, setFeedbackData] = useState({
    name: "",
    email: "",
    message: "",
    rating: 5,
  });

  const testimonials = [
    {
      name: "Sarah Mitchell",
      service: "WOF Inspection & Service",
      rating: 5,
      text: "Absolutely fantastic service! The team at AutoHub went above and beyond. They explained everything clearly and got my car sorted quickly. Highly recommend!",
      date: "2 weeks ago",
    },
    {
      name: "David Chen",
      service: "Engine & Transmission service",
      rating: 5,
      text: "I've been bringing my cars here for years. Professional, honest, and always reliable. They fixed my engine issue that another garage couldn't diagnose. True experts!",
      date: "1 month ago",
    },
    {
      name: "Emma Thompson",
      service: "Pre-Purchase Inspection",
      rating: 5,
      text: "Their pre-purchase inspection saved me from buying a lemon! Very thorough and detailed report. Worth every penny. Thank you AutoHub!",
      date: "3 weeks ago",
    },
    {
      name: "James Wilson",
      service: "Brake",
      rating: 5,
      text: "Great experience from start to finish. The staff are friendly and knowledgeable. My car drives like new after the brake and suspension work. Will definitely be back!",
      date: "1 week ago",
    },
    {
      name: "Lisa Anderson",
      service: "Auto Electrical",
      rating: 5,
      text: "Had an electrical issue that was driving me crazy. They diagnosed it quickly and fixed it at a fair price. Excellent communication throughout. Highly professional service!",
      date: "2 months ago",
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleFeedbackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!feedbackData.name || !feedbackData.email || !feedbackData.message) {
      toast.error("Please fill in all required fields");
      return;
    }

    // Show success message
    toast.success("Thank you for your feedback!");
    
    // Reset form
    setFeedbackData({
      name: "",
      email: "",
      message: "",
      rating: 5,
    });
    setShowFeedbackForm(false);
  };

  const handleInputChange = (field: string, value: string | number) => {
    setFeedbackData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <section className="py-20 bg-gradient-to-b from-[#000000] to-[#0A0A0A]">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#DEDEDE] mb-4">
              What Our Customers Say
            </h2>
            <p className="text-[#A0A0A0] max-w-2xl mx-auto">
              Don't just take our word for it. See what our valued customers have to say about their experience at AutoHub Service Centre.
            </p>
          </div>

          {/* Testimonials Slider */}
          <div className="relative mb-12">
            <Card className="bg-[#262626] border-[#0368D3]/20 p-8 md:p-12">
              {/* Stars */}
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="text-[#FFC107] fill-[#FFC107]" size={24} />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-[#DEDEDE] text-lg md:text-xl text-center mb-6 italic">
                "{testimonials[currentIndex].text}"
              </p>

              {/* Customer Info */}
              <div className="text-center">
                <p className="text-[#0368D3] font-semibold text-lg">
                  {testimonials[currentIndex].name}
                </p>
                <p className="text-[#A0A0A0] text-sm">
                  {testimonials[currentIndex].service}
                </p>
                <p className="text-[#A0A0A0] text-xs mt-1">
                  {testimonials[currentIndex].date}
                </p>
              </div>

              {/* Navigation Buttons */}
              <div className="flex justify-center gap-4 mt-8">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={prevTestimonial}
                  className="border-[#0368D3]/20 text-[#DEDEDE] hover:bg-[#0368D3]/10"
                >
                  <ChevronLeft size={20} />
                </Button>
                <div className="flex items-center gap-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === currentIndex
                          ? "bg-[#0368D3] w-6"
                          : "bg-[#0368D3]/30 hover:bg-[#0368D3]/50"
                      }`}
                      aria-label={`Go to testimonial ${index + 1}`}
                    />
                  ))}
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={nextTestimonial}
                  className="border-[#0368D3]/20 text-[#DEDEDE] hover:bg-[#0368D3]/10"
                >
                  <ChevronRight size={20} />
                </Button>
              </div>
            </Card>
          </div>

          {/* Feedback CTA */}
          {!showFeedbackForm ? (
            <Card className="bg-[#262626] border-[#0368D3]/20 p-8 text-center">
              <MessageSquare className="text-[#0368D3] mx-auto mb-4" size={48} />
              <h3 className="text-2xl font-bold text-[#DEDEDE] mb-3">
                Share Your Experience
              </h3>
              <p className="text-[#A0A0A0] mb-6">
                We'd love to hear about your experience with AutoHub Service Centre. Your feedback helps us improve our services.
              </p>
              <Button
                onClick={() => setShowFeedbackForm(true)}
                className="bg-[#0368D3] hover:bg-[#0368D3]/90 text-[#DEDEDE]"
              >
                Send Us Your Feedback
              </Button>
            </Card>
          ) : (
            <Card className="bg-[#262626] border-[#0368D3]/20 p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-[#DEDEDE]">Send Your Feedback</h3>
                <Button
                  variant="ghost"
                  onClick={() => setShowFeedbackForm(false)}
                  className="text-[#A0A0A0] hover:text-[#DEDEDE]"
                >
                  Cancel
                </Button>
              </div>

              <form onSubmit={handleFeedbackSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="feedback-name" className="text-[#DEDEDE]">
                      Your Name *
                    </Label>
                    <Input
                      id="feedback-name"
                      placeholder="John Smith"
                      value={feedbackData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      className="bg-[#000000] border-[#0368D3]/20 text-[#DEDEDE] focus:border-[#0368D3]"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="feedback-email" className="text-[#DEDEDE]">
                      Email Address *
                    </Label>
                    <Input
                      id="feedback-email"
                      type="email"
                      placeholder="john@example.com"
                      value={feedbackData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className="bg-[#000000] border-[#0368D3]/20 text-[#DEDEDE] focus:border-[#0368D3]"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label className="text-[#DEDEDE]">Your Rating</Label>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((rating) => (
                      <button
                        key={rating}
                        type="button"
                        onClick={() => handleInputChange("rating", rating)}
                        className="transition-transform hover:scale-110"
                      >
                        <Star
                          size={32}
                          className={
                            rating <= feedbackData.rating
                              ? "text-[#FFC107] fill-[#FFC107]"
                              : "text-[#A0A0A0]"
                          }
                        />
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="feedback-message" className="text-[#DEDEDE]">
                    Your Feedback *
                  </Label>
                  <Textarea
                    id="feedback-message"
                    placeholder="Tell us about your experience..."
                    value={feedbackData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    className="bg-[#000000] border-[#0368D3]/20 text-[#DEDEDE] focus:border-[#0368D3] min-h-[150px]"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="bg-[#0368D3] hover:bg-[#0368D3]/90 text-[#DEDEDE] w-full"
                >
                  <Send className="mr-2" size={18} />
                  Submit Feedback
                </Button>
              </form>
            </Card>
          )}
        </div>
      </div>
    </section>
  );
}
