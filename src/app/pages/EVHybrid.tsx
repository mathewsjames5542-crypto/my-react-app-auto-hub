import { Link } from "react-router";
import { Battery, Zap, Leaf, Wrench, CheckCircle, ArrowRight, Shield, Clock } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";

export function EVHybrid() {
  const services = [
    {
      icon: Battery,
      title: "EV Battery Diagnostics",
      description: "Comprehensive battery health checks, performance testing, and diagnostics using specialized equipment.",
    },
    {
      icon: Zap,
      title: "Hybrid System Service",
      description: "Complete servicing of hybrid powertrains including battery conditioning and system optimization.",
    },
    {
      icon: Wrench,
      title: "Electric Motor Repairs",
      description: "Expert repairs and maintenance for electric motors and drive systems.",
    },
    {
      icon: Shield,
      title: "High Voltage Safety",
      description: "All work performed by certified technicians with high voltage safety training.",
    },
  ];

  const benefits = [
    "Certified EV & Hybrid technicians",
    "Latest diagnostic equipment",
    "OEM-approved procedures",
    "Comprehensive safety protocols",
    "Battery health reports",
    "Warranty-safe servicing",
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#000000] via-[#0A0A0A] to-[#000000] py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1652904863459-54e8b5a65b25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpYyUyMHZlaGljbGUlMjBoeWJyaWQlMjBjYXIlMjBjaGFyZ2luZ3xlbnwxfHx8fDE3NzYzMzEwODN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')] bg-cover bg-center opacity-15" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-[#10B981]/20 text-[#10B981] px-4 py-2 rounded-full mb-6">
              <Leaf size={20} />
              <span className="font-semibold">Eco-Friendly Solutions</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-[#DEDEDE] mb-6">
              EV & Hybrid Specialists
            </h1>
            <p className="text-lg md:text-xl text-[#A0A0A0] mb-8">
              Expert servicing and repairs for electric and hybrid vehicles. Our certified technicians are trained in the latest EV technology to keep your eco-friendly vehicle running at peak performance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/booking">
                <Button className="bg-[#10B981] hover:bg-[#10B981]/90 text-white px-8 py-6 text-lg">
                  Book EV Service
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" className="border-[#10B981] text-[#10B981] hover:bg-[#10B981]/10 px-8 py-6 text-lg">
                  Get a Quote
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#10B981]/10 to-transparent" />
      </section>

      {/* Why Choose Us for EV/Hybrid */}
      <section className="py-20 bg-gradient-to-b from-[#000000] to-[#0A0A0A]">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#DEDEDE] mb-4">
                Why Choose AutoHub for Your EV?
              </h2>
              <p className="text-[#A0A0A0] max-w-2xl mx-auto">
                We're committed to providing the best service for electric and hybrid vehicles with specialized training and equipment.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {services.map((service, index) => (
                <Card key={index} className="bg-[#262626] border-[#10B981]/20 p-8 hover:border-[#10B981] transition-all duration-300">
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-[#10B981]/20 rounded-full mb-4">
                    <service.icon className="text-[#10B981]" size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-[#DEDEDE] mb-3">{service.title}</h3>
                  <p className="text-[#A0A0A0]">{service.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services We Offer */}
      <section className="py-20 bg-[#000000]">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#DEDEDE] mb-6">
                  Comprehensive EV & Hybrid Services
                </h2>
                <p className="text-[#A0A0A0] mb-6">
                  From routine maintenance to complex repairs, we handle all aspects of electric and hybrid vehicle care. Our technicians undergo continuous training to stay current with the rapidly evolving EV technology.
                </p>
                <ul className="space-y-3 mb-8">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center gap-3 text-[#DEDEDE]">
                      <CheckCircle className="text-[#10B981] flex-shrink-0" size={20} />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/booking">
                  <Button className="bg-[#10B981] hover:bg-[#10B981]/90 text-white">
                    Schedule Service
                    <ArrowRight className="ml-2" size={18} />
                  </Button>
                </Link>
              </div>
              <div className="relative">
                <Card className="bg-[#262626] border-[#10B981]/20 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1652904863459-54e8b5a65b25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpYyUyMHZlaGljbGUlMjBoeWJyaWQlMjBjYXIlMjBjaGFyZ2luZ3xlbnwxfHx8fDE3NzYzMzEwODN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="EV Charging"
                    className="w-full h-[400px] object-cover"
                  />
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vehicle Compatibility */}
      <section className="py-20 bg-gradient-to-b from-[#000000] to-[#0A0A0A]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#DEDEDE] mb-6">
              We Service All EV & Hybrid Brands
            </h2>
            <p className="text-[#A0A0A0] mb-12">
              Our expertise covers all major electric and hybrid vehicle manufacturers including Tesla, Nissan Leaf, Toyota Prius, BMW i-Series, Hyundai Kona Electric, and many more.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <Card className="bg-[#262626] border-[#10B981]/20 p-6 text-center">
                <Battery className="text-[#10B981] mx-auto mb-2" size={32} />
                <p className="text-[#DEDEDE] font-semibold">Tesla</p>
              </Card>
              <Card className="bg-[#262626] border-[#10B981]/20 p-6 text-center">
                <Leaf className="text-[#10B981] mx-auto mb-2" size={32} />
                <p className="text-[#DEDEDE] font-semibold">Nissan</p>
              </Card>
              <Card className="bg-[#262626] border-[#10B981]/20 p-6 text-center">
                <Zap className="text-[#10B981] mx-auto mb-2" size={32} />
                <p className="text-[#DEDEDE] font-semibold">BMW</p>
              </Card>
              <Card className="bg-[#262626] border-[#10B981]/20 p-6 text-center">
                <Battery className="text-[#10B981] mx-auto mb-2" size={32} />
                <p className="text-[#DEDEDE] font-semibold">Hyundai</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#000000]">
        <div className="container mx-auto px-4">
          <Card className="bg-gradient-to-r from-[#10B981]/20 via-[#10B981]/10 to-[#10B981]/20 border-[#10B981]/20 p-12 text-center">
            <Clock className="text-[#10B981] mx-auto mb-6" size={48} />
            <h2 className="text-3xl md:text-4xl font-bold text-[#DEDEDE] mb-4">
              Ready to Service Your EV or Hybrid?
            </h2>
            <p className="text-[#A0A0A0] mb-8 max-w-2xl mx-auto">
              Book your appointment today and experience the difference of working with certified EV specialists.
            </p>
            <Link to="/booking">
              <Button className="bg-[#10B981] hover:bg-[#10B981]/90 text-white px-8 py-6 text-lg">
                Book Now
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
          </Card>
        </div>
      </section>
    </div>
  );
}
