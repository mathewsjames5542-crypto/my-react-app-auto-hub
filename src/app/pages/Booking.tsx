import { Calendar, CheckCircle, Clock, ExternalLink } from "lucide-react";
import { Card } from "../components/ui/card";

const BOOKING_URL =
  "https://www.mechanicdesk.com.au/online-booking/67f0240abb8bd7b564fd3bce081ec4a922d4e3e5";

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
              Reserve your service appointment through our live online booking
              system. Pick a time that suits you and send the request directly
              to our workshop.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#000000]">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <Card className="bg-[#262626] border-[#0368D3]/20 p-4 md:p-6 overflow-hidden">
              <div className="mb-5 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-[#DEDEDE]">
                    Book Through MechanicDesk
                  </h2>
                  <p className="text-[#A0A0A0] mt-2">
                    If the booking window does not load, open it in a new tab.
                  </p>
                </div>
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-md border border-[#0368D3]/40 bg-[#0368D3]/10 px-4 py-2 text-[#DEDEDE] transition-colors hover:bg-[#0368D3]/20"
                >
                  Open Booking Page
                  <ExternalLink size={18} />
                </a>
              </div>

              <div className="rounded-xl border border-[#0368D3]/20 bg-[#111111] p-2">
                <iframe
                  src={BOOKING_URL}
                  title="MechanicDesk Online Booking"
                  width="100%"
                  height="980"
                  frameBorder="0"
                  loading="lazy"
                  className="min-h-[980px] w-full rounded-lg bg-white"
                />
              </div>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <Card className="bg-[#262626] border-[#0368D3]/20 p-6 text-center">
                <Clock className="text-[#0368D3] mx-auto mb-3" size={32} />
                <h3 className="text-[#DEDEDE] font-semibold mb-2">
                  Live Availability
                </h3>
                <p className="text-[#A0A0A0] text-sm">
                  View current appointment options in real time
                </p>
              </Card>
              <Card className="bg-[#262626] border-[#0368D3]/20 p-6 text-center">
                <CheckCircle className="text-[#0368D3] mx-auto mb-3" size={32} />
                <h3 className="text-[#DEDEDE] font-semibold mb-2">
                  Direct Booking
                </h3>
                <p className="text-[#A0A0A0] text-sm">
                  Send your request straight to our workshop system
                </p>
              </Card>
              <Card className="bg-[#262626] border-[#0368D3]/20 p-6 text-center">
                <Calendar className="text-[#0368D3] mx-auto mb-3" size={32} />
                <h3 className="text-[#DEDEDE] font-semibold mb-2">
                  Fast Scheduling
                </h3>
                <p className="text-[#A0A0A0] text-sm">
                  Choose a booking time that works for your day
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
