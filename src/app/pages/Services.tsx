import { useEffect } from "react";
import { Link, useLocation } from "react-router";
import { CheckCircle, Wrench, Zap, Search, CircleDot, Cog, Droplet, ArrowRight, ClipboardCheck, Settings } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";

export function Services() {
  const location = useLocation();

  const services = [
    {
      id: "wof-inspection",
      icon: CheckCircle,
      title: "WOF Inspection",
      description: "Comprehensive Warrant of Fitness inspection to ensure your vehicle meets all New Zealand safety standards and regulations.",
      features: [
        "Full safety inspection",
        "Pre-WOF checks available",
        "Same-day service",
        "Minor repairs included",
      ],
      image: "https://images.unsplash.com/photo-1698998882494-57c3e043f340?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdXRvbW90aXZlJTIwbWVjaGFuaWMlMjB3b3Jrc2hvcHxlbnwxfHx8fDE3NzM3OTI4NTl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      id: "mechanical-repairs",
      icon: Wrench,
      title: "Mechanical Repairs",
      description: "Expert mechanical repairs for all makes and models. From minor fixes to major overhauls, our certified technicians have you covered.",
      features: [
        "All makes and models",
        "Quality parts used",
        "Experienced technicians",
        "Warranty on repairs",
      ],
      image: "https://images.unsplash.com/photo-1566206085505-2e0904c3e547?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBlbmdpbmUlMjByZXBhaXJ8ZW58MXx8fHwxNzczODIzMjE3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      id: "auto-electrical",
      icon: Zap,
      title: "Auto Electrical",
      description: "Specialized auto electrical services including battery replacement, alternator repair, starter motor, and complete electrical diagnostics.",
      features: [
        "Electrical diagnostics",
        "Battery testing & replacement",
        "Alternator & starter repairs",
        "Lighting systems",
      ],
      image: "https://images.unsplash.com/photo-1732027598118-995e2391675d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdXRvJTIwZWxlY3RyaWNhbCUyMHdpcmluZ3xlbnwxfHx8fDE3NzM4MjMyMTl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      id: "diagnostics",
      icon: Search,
      title: "Diagnostics",
      description: "Advanced computer diagnostics using the latest equipment to accurately identify and resolve issues with your vehicle's systems.",
      features: [
        "Computer diagnostics",
        "Engine management",
        "Fault code reading",
        "Performance testing",
      ],
      image: "https://images.unsplash.com/photo-1764122623556-90a7d480df53?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBkaWFnbm9zdGljJTIwY29tcHV0ZXJ8ZW58MXx8fHwxNzczNzM4MDA1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      id: "brake",
      icon: CircleDot,
      title: "Brake",
      description: "Complete brake and suspension services to ensure your vehicle's safety and comfort on the road.",
      features: [
        "Brake pad replacement",
        "Disc & rotor service",
        "Suspension repairs",
        "Wheel alignment",
      ],
      image: "https://images.unsplash.com/photo-1760317890314-e964ffd7e6a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBicmFrZSUyMHNlcnZpY2V8ZW58MXx8fHwxNzczODIzMjE5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      id: "engine-transmission-service",
      icon: Cog,
      title: "Engine & Transmission service",
      description: "Comprehensive engine repair and maintenance services from minor tune-ups to complete engine rebuilds.",
      features: [
        "Engine diagnostics",
        "Timing belt replacement",
        "Head gasket repairs",
        "Engine rebuilds",
      ],
      image: "https://images.unsplash.com/photo-1566206085505-2e0904c3e547?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBlbmdpbmUlMjByZXBhaXJ8ZW58MXx8fHwxNzczODIzMjE3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      id: "oil-services",
      icon: Droplet,
      title: "Oil Services",
      description: "Regular oil changes and fluid maintenance to keep your engine running smoothly and extend its lifespan.",
      features: [
        "Oil & filter change",
        "Fluid top-ups",
        "Multi-point inspection",
        "Synthetic oils available",
      ],
      image: "https://images.unsplash.com/photo-1771340742493-52fbd5476ccb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBvaWwlMjBjaGFuZ2UlMjBzZXJ2aWNlfGVufDF8fHx8MTc3MzcxMjM1OXww&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      id: "pre-purchase-inspection",
      icon: ClipboardCheck,
      title: "Pre-Purchase Inspection",
      description: "Comprehensive pre-purchase vehicle inspection to give you peace of mind before buying. Our detailed report covers all major systems and potential issues.",
      features: [
        "Complete mechanical inspection",
        "Detailed condition report",
        "Test drive evaluation",
        "Buy with confidence",
      ],
      image: "https://images.unsplash.com/photo-1727893467393-24bc37e8a117?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmUlMjBwdXJjaGFzZSUyMGNhciUyMGluc3BlY3Rpb24lMjBtZWNoYW5pY3xlbnwxfHx8fDE3NzY0MTQxNjd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: "steering-suspension",
      icon: Settings,
      title: "Steering & Suspension",
      description: "Expert steering and suspension services to ensure precise handling, optimal comfort, and safe vehicle control on all road conditions.",
      features: [
        "Steering system repairs",
        "Suspension component replacement",
        "Wheel alignment & balancing",
        "Shock absorber service",
      ],
      image: "https://images.unsplash.com/photo-1765903916319-f13fba3632c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBzdGVlcmluZyUyMHN1c3BlbnNpb24lMjBzeXN0ZW18ZW58MXx8fHwxNzc2NDE0MTY3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
  ];

  useEffect(() => {
    if (!location.hash) {
      return;
    }

    const serviceId = location.hash.slice(1);
    const section = document.getElementById(serviceId);

    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [location.hash]);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#000000] via-[#0A0A0A] to-[#000000] py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-[#DEDEDE] mb-6">
              Our Services
            </h1>
            <p className="text-lg text-[#A0A0A0]">
              Comprehensive automotive services delivered by certified technicians using state-of-the-art equipment. We service all makes and models with a commitment to quality and customer satisfaction.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-[#000000]">
        <div className="container mx-auto px-4">
          <div className="space-y-12">
            {services.map((service, index) => (
              <Card 
                key={index} 
                id={service.id}
                className={`bg-[#262626] border-[#0368D3]/20 overflow-hidden hover:border-[#0368D3] transition-all duration-300 ${
                  index % 2 === 0 ? '' : ''
                }`}
              >
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 ${index % 2 === 0 ? '' : 'lg:grid-flow-dense'}`}>
                  {/* Image */}
                  <div className={`relative h-64 lg:h-auto ${index % 2 === 0 ? '' : 'lg:col-start-2'}`}>
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-transparent to-transparent" />
                  </div>

                  {/* Content */}
                  <div className={`p-8 flex flex-col justify-center ${index % 2 === 0 ? '' : 'lg:col-start-1 lg:row-start-1'}`}>
                    <div className="inline-flex items-center justify-center w-14 h-14 bg-[#0368D3]/20 rounded-full mb-4">
                      <service.icon className="text-[#0368D3]" size={28} />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-[#DEDEDE] mb-4">
                      {service.title}
                    </h2>
                    <p className="text-[#A0A0A0] mb-6">
                      {service.description}
                    </p>
                    <ul className="space-y-3 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-3 text-[#DEDEDE]">
                          <CheckCircle className="text-[#0368D3] flex-shrink-0" size={20} />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link to="/booking">
                      <Button className="bg-[#0368D3] hover:bg-[#0368D3]/90 text-[#DEDEDE] w-full sm:w-auto">
                        Book This Service
                        <ArrowRight className="ml-2" size={18} />
                      </Button>
                    </Link>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#0368D3]/20 via-[#0368D3]/10 to-[#0368D3]/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#DEDEDE] mb-4">
            Need a Service?
          </h2>
          <p className="text-[#A0A0A0] mb-8 max-w-2xl mx-auto">
            Book your appointment online today and let our expert technicians take care of your vehicle.
          </p>
          <Link to="/booking">
            <Button className="bg-[#0368D3] hover:bg-[#0368D3]/90 text-[#DEDEDE] px-8 py-6 text-lg">
              Book Appointment
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
