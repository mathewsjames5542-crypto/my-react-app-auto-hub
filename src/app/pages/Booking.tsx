import { Calendar, CheckCircle, Mail, ExternalLink } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";

const mechanicDeskBookingUrl =
  "https://www.mechanicdesk.com.au/booking_requests/new?token=33d0a7e1f20966490d6721efd107d3ccf3011267";

export function Booking() {
  return (
    <div className="w-full">
      <section className="bg-gradient-to-br from-[#000000] via-[#0A0A0A] to-[#000000] py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-[#DEDEDE] mb-6">
              Online Booking
            </h1>
            <p className="text-lg text-[#A0A0A0]">
              Book your service online through our MechanicDesk booking system. Choose your preferred service and time, then submit your request directly from the form below.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#000000]">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-8">
            <Card className="bg-[#262626] border-[#0368D3]/20 p-6 md:p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex items-start gap-4">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#0368D3]/20">
                    <Calendar className="text-[#0368D3]" size={24} />
                  </div>
                  <div>
                    <h2 className="text-[#DEDEDE] text-xl font-semibold mb-2">Live Booking Form</h2>
                    <p className="text-[#A0A0A0] text-sm">
                      Complete your booking request directly through our online booking partner.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#0368D3]/20">
                    <Mail className="text-[#0368D3]" size={24} />
                  </div>
                  <div>
                    <h2 className="text-[#DEDEDE] text-xl font-semibold mb-2">Confirmation Email</h2>
                    <p className="text-[#A0A0A0] text-sm">Autohubmount@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#0368D3]/20">
                    <CheckCircle className="text-[#0368D3]" size={24} />
                  </div>
                  <div>
                    <h2 className="text-[#DEDEDE] text-xl font-semibold mb-2">Need a Larger View?</h2>
                    <a
                      href={mechanicDeskBookingUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="mt-1 bg-[#0368D3] hover:bg-[#0368D3]/90 text-[#DEDEDE]">
                        Open Booking in New Tab
                        <ExternalLink className="ml-2" size={18} />
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="bg-[#262626] border-[#0368D3]/20 p-3 md:p-4 overflow-hidden">
              <div className="rounded-lg overflow-hidden bg-[#111111]">
                <iframe
                  allowTransparency={true}
                  src={mechanicDeskBookingUrl}
                  width="100%"
                  height="900"
                  frameBorder="0"
                  style={{ backgroundColor: "transparent" }}
                  title="MechanicDesk online booking"
                  className="w-full"
                />
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
