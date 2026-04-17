import { Link } from "react-router";
import { Wrench, CheckCircle, Clock, Users, Star, ArrowRight } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { Testimonials } from "../components/Testimonials";

export function Home() {
  const services = [
    {
      title: "WOF Inspection",
      description: "Comprehensive vehicle inspection to ensure your car meets safety standards.",
      icon: CheckCircle,
    },
    {
      title: "Mechanical Repairs",
      description: "Expert mechanical repairs for all makes and models of vehicles.",
      icon: Wrench,
    },
    {
      title: "Engine & Transmission service",
      description: "Professional engine diagnostics and repair services.",
      icon: Wrench,
    },
    {
      title: "Oil Services",
      description: "Regular oil changes and fluid maintenance for optimal performance.",
      icon: Clock,
    },
  ];

  const features = [
    {
      icon: Users,
      title: "Experienced Technicians",
      description: "Our certified mechanics have over 15 years of experience.",
    },
    {
      icon: Clock,
      title: "Fast Turnaround",
      description: "Quick and efficient service without compromising quality.",
    },
    {
      icon: Star,
      title: "Quality Guaranteed",
      description: "We stand behind our work with comprehensive warranties.",
    },
    {
      icon: CheckCircle,
      title: "Latest Equipment",
      description: "State-of-the-art diagnostic and repair equipment.",
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#000000] via-[#0A0A0A] to-[#000000] py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1698998882494-57c3e043f340?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdXRvbW90aXZlJTIwbWVjaGFuaWMlMjB3b3Jrc2hvcHxlbnwxfHx8fDE3NzM3OTI4NTl8MA&ixlib=rb-4.1.0&q=80&w=1080')] bg-cover bg-center opacity-10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold text-[#DEDEDE] mb-6">
              Expert Auto Service You Can Trust
            </h1>
            <p className="text-lg md:text-xl text-[#A0A0A0] mb-8">
              From routine maintenance to complex repairs, AutoHub Service Centre provides comprehensive automotive solutions with certified technicians and state-of-the-art equipment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/booking">
                <Button className="bg-[#0368D3] hover:bg-[#0368D3]/90 text-[#DEDEDE] px-8 py-6 text-lg">
                  Book Appointment
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </Link>
              <Link to="/services">
                <Button variant="outline" className="border-[#0368D3] text-[#0368D3] hover:bg-[#0368D3]/10 px-8 py-6 text-lg">
                  View Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#0368D3]/10 to-transparent" />
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-[#000000]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#DEDEDE] mb-4">Our Services</h2>
            <p className="text-[#A0A0A0] max-w-2xl mx-auto">
              Comprehensive automotive services to keep your vehicle running smoothly and safely.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="bg-[#262626] border-[#0368D3]/20 p-6 hover:border-[#0368D3] transition-all duration-300 hover:transform hover:scale-105">
                <service.icon className="text-[#0368D3] mb-4" size={40} />
                <h3 className="text-[#DEDEDE] text-xl mb-2">{service.title}</h3>
                <p className="text-[#A0A0A0]">{service.description}</p>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/services">
              <Button className="bg-[#0368D3] hover:bg-[#0368D3]/90 text-[#DEDEDE]">
                View All Services
                <ArrowRight className="ml-2" size={18} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-b from-[#000000] to-[#0A0A0A]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#DEDEDE] mb-4">Why Choose AutoHub?</h2>
            <p className="text-[#A0A0A0] max-w-2xl mx-auto">
             We’re committed to providing the best automotive service experience in Bay of Plenty.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#0368D3]/20 rounded-full mb-4">
                  <feature.icon className="text-[#0368D3]" size={32} />
                </div>
                <h3 className="text-[#DEDEDE] text-xl mb-2">{feature.title}</h3>
                <p className="text-[#A0A0A0]">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#0368D3]/20 via-[#0368D3]/10 to-[#0368D3]/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#DEDEDE] mb-4">
            Ready to Service Your Vehicle?
          </h2>
          <p className="text-[#A0A0A0] mb-8 max-w-2xl mx-auto">
            Book your appointment online today and experience the AutoHub difference.
          </p>
          <Link to="/booking">
            <Button className="bg-[#0368D3] hover:bg-[#0368D3]/90 text-[#DEDEDE] px-8 py-6 text-lg">
              Book Now
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}