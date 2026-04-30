import { Card } from "../components/ui/card";
import { useState } from "react";
import { X } from "lucide-react";
import diagnosticImage from "../../assets/diagnostic.jpeg";
import engineImage from "../../assets/engine.jpeg";
import oilServicesImage from "../../assets/oil-services.jpeg";
import transmissionImage from "../../assets/transmission.jpeg";

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    {
      url: "https://images.unsplash.com/photo-1729792706191-08f3ed158650?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdXRvJTIwcmVwYWlyJTIwd29ya3Nob3AlMjBnYWxsZXJ5fGVufDF8fHx8MTc3NjMzMTA4Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "State-of-the-Art Workshop",
      category: "Facilities"
    },
    {
      url: "https://images.unsplash.com/photo-1698998882494-57c3e043f340?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdXRvbW90aXZlJTIwbWVjaGFuaWMlMjB3b3Jrc2hvcHxlbnwxfHx8fDE3NzM3OTI4NTl8MA&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Expert Technicians at Work",
      category: "Team"
    },
    {
      url: "https://images.unsplash.com/photo-1637640125496-31852f042a60?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdXRvJTIwbWVjaGFuaWMlMjB3b3Jrc2hvcCUyMHRvb2xzfGVufDF8fHx8MTc3NjMzMTEzNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Professional Tools & Equipment",
      category: "Equipment"
    },
    {
      url: "https://images.unsplash.com/photo-1702146713870-8cdd7ab983fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBzZXJ2aWNlJTIwYmF5JTIwd29ya3Nob3B8ZW58MXx8fHwxNzc2MzMxMTM2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Service Bays",
      category: "Facilities"
    },
    {
      url: "https://images.unsplash.com/photo-1727413434026-0f8314c037d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdXRvbW90aXZlJTIwcmVwYWlyJTIwZ2FyYWdlJTIwZXF1aXBtZW50fGVufDF8fHx8MTc3NjMzMTEzNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Advanced Diagnostic Equipment",
      category: "Equipment"
    },
    {
      url: engineImage,
      title: "Engine Repair Services",
      category: "Services"
    },
    {
      url: transmissionImage,
      title: "Transmission Service",
      category: "Services"
    },
    {
      url: oilServicesImage,
      title: "Oil Change Service",
      category: "Services"
    },
    {
      url: "https://images.unsplash.com/photo-1764743259058-a27178710a09?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhdXRvJTIwc2VydmljZSUyMGNlbnRlcnxlbnwxfHx8fDE3NzYzMzExMzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Modern Service Center",
      category: "Facilities"
    },
    {
      url: "https://images.unsplash.com/photo-1618312980096-873bd19759a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBsaWZ0JTIwaHlkcmF1bGljJTIwd29ya3Nob3B8ZW58MXx8fHwxNzc2MzMxMTM4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Hydraulic Lift Systems",
      category: "Equipment"
    },
    {
      url: "https://images.unsplash.com/photo-1566206085505-2e0904c3e547?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBlbmdpbmUlMjByZXBhaXJ8ZW58MXx8fHwxNzczODIzMjE3fDA&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Precision Mechanical Work",
      category: "Services"
    },
    {
      url: "https://images.unsplash.com/photo-1732027598118-995e2391675d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdXRvJTIwZWxlY3RyaWNhbCUyMHdpcmluZ3xlbnwxfHx8fDE3NzM4MjMyMTl8MA&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Auto Electrical Services",
      category: "Services"
    },
    {
      url: "https://images.unsplash.com/photo-1760317890314-e964ffd7e6a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBicmFrZSUyMHNlcnZpY2V8ZW58MXx8fHwxNzczODIzMjE5fDA&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Brake System Repairs",
      category: "Services"
    },
    {
      url: diagnosticImage,
      title: "Computer Diagnostics",
      category: "Services"
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#000000] via-[#0A0A0A] to-[#000000] py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-[#DEDEDE] mb-6">
              Our Gallery
            </h1>
            <p className="text-lg text-[#A0A0A0]">
              Take a look inside AutoHub Service Centre. See our state-of-the-art facilities, expert team, and professional equipment in action.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-[#000000]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <Card 
                key={index}
                className="bg-[#262626] border-[#0368D3]/20 overflow-hidden hover:border-[#0368D3] transition-all duration-300 cursor-pointer group"
                onClick={() => setSelectedImage(image.url)}
              >
                <div className="relative aspect-video overflow-hidden">
                  <img 
                    src={image.url}
                    alt={image.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-transparent to-transparent opacity-60" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <div className="inline-block bg-[#0368D3] text-[#DEDEDE] text-xs px-2 py-1 rounded mb-2">
                      {image.category}
                    </div>
                    <h3 className="text-[#DEDEDE] font-semibold">{image.title}</h3>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-[#000000]/95 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-[#DEDEDE] hover:text-[#0368D3] transition-colors"
            onClick={() => setSelectedImage(null)}
            aria-label="Close"
          >
            <X size={32} />
          </button>
          <img 
            src={selectedImage}
            alt="Gallery preview"
            className="max-w-full max-h-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}
