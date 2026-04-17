import { Link } from "react-router";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter, MessageCircle as WhatsAppIcon, Share2 } from "lucide-react";
import logo from "figma:asset/93b3fae3eb97ab9525c7d6cddf6a333926c8f7b3.png";

export function Footer() {
  return (
    <footer className="bg-[#000000] border-t border-[#0368D3]/20 mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <img src={logo} alt="AutoHub Service Centre" className="h-20 mb-6" />
            <p className="text-[#A0A0A0] mb-4">
              Your trusted automotive service center providing quality repairs and maintenance since 2010.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-[#DEDEDE] hover:text-[#0368D3] transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-[#DEDEDE] hover:text-[#0368D3] transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-[#DEDEDE] hover:text-[#0368D3] transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-[#DEDEDE] mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-[#A0A0A0] hover:text-[#0368D3] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-[#A0A0A0] hover:text-[#0368D3] transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/booking" className="text-[#A0A0A0] hover:text-[#0368D3] transition-colors">
                  Online Booking
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-[#A0A0A0] hover:text-[#0368D3] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-[#A0A0A0] hover:text-[#0368D3] transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-[#DEDEDE] mb-4">Our Services</h3>
            <ul className="space-y-2 text-[#A0A0A0]">
              <li>WOF Inspection</li>
              <li>Mechanical Repairs</li>
              <li>Auto Electrical</li>
              <li>Diagnostics</li>
              <li>Brake </li>
              <li>Engine & Transmission service</li>
              <li>Oil Services</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-[#DEDEDE] mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-[#A0A0A0]">
                <MapPin size={20} className="text-[#0368D3] flex-shrink-0 mt-0.5" />
                <span>123 Auto Street, Auckland, New Zealand</span>
              </li>
              <li className="flex items-center gap-3 text-[#A0A0A0]">
                <Phone size={20} className="text-[#0368D3] flex-shrink-0" />
                <span>+64 9 123 4567</span>
              </li>
              <li className="flex items-center gap-3 text-[#A0A0A0]">
                <Mail size={20} className="text-[#0368D3] flex-shrink-0" />
                <span>info@autohub.nz</span>
              </li>
              <li className="flex items-start gap-3 text-[#A0A0A0]">
                <Clock size={20} className="text-[#0368D3] flex-shrink-0 mt-0.5" />
                <span>Mon-Fri: 8am-6pm<br />Sat: 8am-4pm<br />Sun: Closed</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#0368D3]/20 mt-8 pt-8 text-center text-[#A0A0A0]">
          <p>&copy; {new Date().getFullYear()} AutoHub Service Centre. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}