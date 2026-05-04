import { Link } from "react-router";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Music2 } from "lucide-react";
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
              <a href="https://www.facebook.com/share/1Fjf9yQyx9/?mibextid=wwXIfr" className="text-[#0368D3] hover:text-[#0368D3]/80 transition-colors" target="_blank" rel="noopener noreferrer">
                <Facebook size={24} />
              </a>
              <a href="https://www.instagram.com/autohubservicecentre?igsh=MXY2MGZpYzVlZndhaQ==" className="text-[#0368D3] hover:text-[#0368D3]/80 transition-colors" target="_blank" rel="noopener noreferrer">
                <Instagram size={24} />
              </a>
              <a href="https://tiktok.com/@autohub89" className="text-[#0368D3] hover:text-[#0368D3]/80 transition-colors" target="_blank" rel="noopener noreferrer">
                <Music2 size={24} />
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
              <li><Link to="/services#wof-inspection" className="hover:text-[#0368D3] transition-colors">WOF Inspection</Link></li>
              <li><Link to="/services#mechanical-repairs" className="hover:text-[#0368D3] transition-colors">Mechanical Repairs</Link></li>
              <li><Link to="/services#auto-electrical" className="hover:text-[#0368D3] transition-colors">Auto Electrical</Link></li>
              <li><Link to="/services#diagnostics" className="hover:text-[#0368D3] transition-colors">Diagnostics</Link></li>
              <li><Link to="/services#brake" className="hover:text-[#0368D3] transition-colors">Brake</Link></li>
              <li><Link to="/services#engine-transmission-service" className="hover:text-[#0368D3] transition-colors">Engine & Transmission service</Link></li>
              <li><Link to="/services#oil-services" className="hover:text-[#0368D3] transition-colors">Oil Services</Link></li>
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
                <span>+64 792 59984</span>
              </li>
              <li className="flex items-center gap-3 text-[#A0A0A0]">
                <Mail size={20} className="text-[#0368D3] flex-shrink-0" />
                <span>Autohubmount@gmail.com</span>
              </li>
              <li className="flex items-start gap-3 text-[#A0A0A0]">
                <Clock size={20} className="text-[#0368D3] flex-shrink-0 mt-0.5" />
                <span>Mon-Fri: 8am-5.30pm<br />Sat: 8am-1pm<br />Sun: Closed</span>
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
