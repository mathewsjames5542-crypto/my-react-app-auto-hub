import { Card } from "../components/ui/card";
import { useState } from "react";
import { X } from "lucide-react";
import advancedDiagnosticEquipmentImage from "../../assets/advanced-diagnostic-equipment.jpg";
import autoElectricImage from "../../assets/auto-electric.jpeg";
import brakeSystemRepairsImage from "../../assets/brake-system-repairs.jpg";
import diagnosticImage from "../../assets/diagnostic.jpeg";
import engineImage from "../../assets/engine.jpeg";
import hydraulicLiftSystemsImage from "../../assets/hydraulic-lift-systems.jpg";
import mechanicalRepairsImage from "../../assets/mechanical-repairs.jpg";
import modernServiceCenterImage from "../../assets/modern-service-center.jpg";
import oilServicesImage from "../../assets/oil-services.jpeg";
import professionalToolsImage from "../../assets/professional-tools.jpg";
import serviceBaysImage from "../../assets/service-bays.jpg";
import stateOfTheArtImage from "../../assets/state-of-the-art.jpg";
import transmissionImage from "../../assets/transmission.jpeg";
import wofInspectionImage from "../../assets/wof-inspection.jpeg";

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    {
      url: stateOfTheArtImage,
      title: "State-of-the-Art Workshop",
      category: "Facilities"
    },
    {
      url: wofInspectionImage,
      title: "Expert Technicians at Work",
      category: "Team"
    },
    {
      url: professionalToolsImage,
      title: "Professional Tools & Equipment",
      category: "Equipment"
    },
    {
      url: serviceBaysImage,
      title: "Service Bays",
      category: "Facilities"
    },
    {
      url: advancedDiagnosticEquipmentImage,
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
      url: modernServiceCenterImage,
      title: "Modern Service Center",
      category: "Facilities"
    },
    {
      url: hydraulicLiftSystemsImage,
      title: "Hydraulic Lift Systems",
      category: "Equipment"
    },
    {
      url: mechanicalRepairsImage,
      title: "Precision Mechanical Work",
      category: "Services"
    },
    {
      url: autoElectricImage,
      title: "Auto Electrical Services",
      category: "Services"
    },
    {
      url: brakeSystemRepairsImage,
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
