import { Link } from "react-router";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter, MessageCircle as WhatsAppIcon, Share2 } from "lucide-react";
import logo from "../../assets/logo.png";

export function Footer() {
  return (
    <footer className="bg-[#000000] border-t border-[#0368D3]/20 mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <img src={logo} alt="AutoHub Service Centre" className="h-40 mb-6" />
            <p className="text-[#A0A0A0] mb-4">
              Your go-to automotive service center, delivering reliable repairs and maintenance you can count on.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-[#0368D3] hover:text-[#0368D3]/80 transition-colors">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-[#0368D3] hover:text-[#0368D3]/80 transition-colors">
                <Instagram size={24} />
              </a>
              {/* <a href="#" className="text-[#DEDEDE] hover:text-[#0368D3] transition-colors">
                <Twitter size={20} />
              </a> */}
              <a href="https://wa.me/6491234567" className="text-[#0368D3] hover:text-[#0368D3]/80 transition-colors" target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon size={24} />
              </a>
              <a href="https://www.tiktok.com/@autohubnz" className="text-[#0368D3] hover:text-[#0368D3]/80 transition-colors" target="_blank" rel="noopener noreferrer">
                <Share2 size={24} />
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

          {/* Contact Info with Map */}
          <div className="lg:col-span-1 md:col-span-2">
            <h3 className="text-[#DEDEDE] mb-4">Contact Info</h3>
            <div className="aspect-video w-full rounded-lg overflow-hidden mb-6 border border-[#0368D3]/20">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1284.261374!2d176.1873!3d-37.975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d78f7b5a4b6b4d9%3A0xf4c2ff!2s1%2F70%20Truman%20Lane%2C%20Mount%20Maunganui%203175!5e0!3m2!1sen!2snz!4v1730!5m2!1sen!2snz"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                title="Location Map"
              />
            </div>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-[#A0A0A0]">
                <MapPin size={20} className="text-[#0368D3] flex-shrink-0 mt-0.5" />
                <span>1/70 Truman Lane, Mount Maunganui 3175</span>
              </li>
              <li className="flex items-center gap-3 text-[#A0A0A0]">
                <Phone size={20} className="text-[#0368D3] flex-shrink-0" />
                <span>+64 0792 59984’</span>
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
