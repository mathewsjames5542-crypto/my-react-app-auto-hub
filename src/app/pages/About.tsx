import { Users, Award, Clock, Heart, CheckCircle, Target, Eye } from "lucide-react";
import { Card } from "../components/ui/card";
import logo from "figma:asset/93b3fae3eb97ab9525c7d6cddf6a333926c8f7b3.png";

export function About() {
  const stats = [
    { value: "15+", label: "Years Experience" },
    { value: "10,000+", label: "Cars Serviced" },
    { value: "Expert", label: "Team of Professionals" },
    { value: "98%", label: "Customer Satisfaction" },
  ];

  const values = [
    {
      icon: CheckCircle,
      title: "Quality Service",
      description: "We never compromise on the quality of our work, using only premium parts and following industry best practices.",
    },
    {
      icon: Heart,
      title: "Customer First",
      description: "Your satisfaction is our priority. We treat every vehicle as if it were our own and every customer like family.",
    },
    {
      icon: Award,
      title: "Expert Technicians",
      description: "Our team consists of certified mechanics with extensive experience across all vehicle makes and models.",
    },
    {
      icon: Clock,
      title: "Timely Service",
      description: "We respect your time. Our efficient processes ensure quick turnaround without compromising quality.",
    },
  ];

  const team = [
    {
      name: "James Wilson",
      role: "Master Technician",
      experience: "20 years experience",
    },
    {
      name: "Sarah Thompson",
      role: "Diagnostic Specialist",
      experience: "15 years experience",
    },
    {
      name: "Michael Chen",
      role: "Auto Electrician",
      experience: "12 years experience",
    },
    {
      name: "Emma Davis",
      role: "Service Manager",
      experience: "10 years experience",
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#000000] via-[#0A0A0A] to-[#000000] py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <img src={logo} alt="AutoHub Service Centre" className="h-20 md:h-24 mx-auto mb-8" />
            <h1 className="text-4xl md:text-5xl font-bold text-[#DEDEDE] mb-6">
              About AutoHub Service Centre
            </h1>
            <p className="text-lg text-[#A0A0A0]">
              From day one, we’re committed to becoming Bay of Plenty’s most trusted automotive service center—delivering exceptional care for vehicles of all makes and models.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-b from-[#000000] to-[#0A0A0A]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-[#0368D3] mb-2">
                  {stat.value}
                </div>
                <div className="text-[#A0A0A0]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-[#000000]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-[#DEDEDE] mb-6">Our Story</h2>
                <div className="space-y-4 text-[#A0A0A0]">
                 <p>
  AutoHub Service Centre was founded in 2010 with a simple mission: to provide honest, reliable, and high-quality automotive services to the Bay of Plenty community.
</p>
<p>
  What started as a small workshop with just three technicians has grown into one of Bay of Plenty’s most trusted automotive service centers, serving thousands of satisfied customers every year.
</p>
<p>
  Our success is built on a foundation of technical excellence, transparent pricing, and genuine care for our customers and their vehicles. We’ve invested in the latest diagnostic equipment and continuously train our team to stay ahead of evolving automotive technology.
</p>
<p>
  Today, we’re proud to be the go-to choice for families and businesses across Bay of Plenty who value quality, reliability, and exceptional customer service.
</p>
                </div>
              </div>
              <div className="relative">
                <img 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1284.261374!2d176.1873!3d-37.975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d78f7b5a4b6b4d9%3A0xf4c2ff!2s1%2F70%20Truman%20Lane%2C%20Mount%20Maunganui%203175!5e0!3m2!1sen!2snz!4v1730!5m2!1sen!2snz"
                  alt="AutoHub Workshop"
                  className="rounded-lg w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-transparent to-transparent rounded-lg" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gradient-to-b from-[#000000] to-[#0A0A0A]">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="bg-[#262626] border-[#0368D3]/20 p-8">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-[#0368D3]/20 rounded-full mb-4">
                  <Target className="text-[#0368D3]" size={28} />
                </div>
                <h2 className="text-2xl font-bold text-[#DEDEDE] mb-4">Our Mission</h2>
                <p className="text-[#A0A0A0]">
                  To provide exceptional automotive services that exceed customer expectations through technical excellence, honest communication, and genuine care for every vehicle we service.
                </p>
              </Card>
              <Card className="bg-[#262626] border-[#0368D3]/20 p-8">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-[#0368D3]/20 rounded-full mb-4">
                  <Eye className="text-[#0368D3]" size={28} />
                </div>
                <h2 className="text-2xl font-bold text-[#DEDEDE] mb-4">Our Vision</h2>
                <p className="text-[#A0A0A0]">
                 On a mission to become Bay of Plenty’s most trusted automotive service center—driven by integrity, expertise, and a commitment to keeping every customer safe on the road.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-[#000000]">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#DEDEDE] mb-4">Our Values</h2>
              <p className="text-[#A0A0A0] max-w-2xl mx-auto">
                The principles that guide everything we do at AutoHub Service Centre.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="bg-[#262626] border-[#0368D3]/20 p-8 hover:border-[#0368D3] transition-all duration-300">
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-[#0368D3]/20 rounded-full mb-4">
                    <value.icon className="text-[#0368D3]" size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-[#DEDEDE] mb-3">{value.title}</h3>
                  <p className="text-[#A0A0A0]">{value.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      {/* <section className="py-20 bg-gradient-to-b from-[#000000] to-[#0A0A0A]">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#DEDEDE] mb-4">Meet Our Team</h2>
              <p className="text-[#A0A0A0] max-w-2xl mx-auto">
                Our experienced technicians are the heart of AutoHub Service Centre.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {team.map((member, index) => (
                <Card key={index} className="bg-[#262626] border-[#0368D3]/20 p-6 text-center hover:border-[#0368D3] transition-all duration-300">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-[#0368D3]/20 rounded-full mb-4 mx-auto">
                    <Users className="text-[#0368D3]" size={36} />
                  </div>
                  <h3 className="text-lg font-bold text-[#DEDEDE] mb-1">{member.name}</h3>
                  <p className="text-[#0368D3] mb-2">{member.role}</p>
                  <p className="text-[#A0A0A0] text-sm">{member.experience}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section> */}

      {/* Certifications */}
      {/* <section className="py-20 bg-[#000000]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#DEDEDE] mb-6">
              Certified & Trusted
            </h2>
            <p className="text-[#A0A0A0] mb-12">
              We maintain the highest industry standards and certifications to ensure quality service for your vehicle.
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8">
              <Card className="bg-[#262626] border-[#0368D3]/20 p-6">
                <Award className="text-[#0368D3] mx-auto mb-2" size={40} />
                <p className="text-[#DEDEDE]">MTA Certified</p>
              </Card>
              <Card className="bg-[#262626] border-[#0368D3]/20 p-6">
                <Award className="text-[#0368D3] mx-auto mb-2" size={40} />
                <p className="text-[#DEDEDE]">VTNZ Approved</p>
              </Card>
              <Card className="bg-[#262626] border-[#0368D3]/20 p-6">
                <Award className="text-[#0368D3] mx-auto mb-2" size={40} />
                <p className="text-[#DEDEDE]">AA Partner</p>
              </Card>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
}