import { Link, useLocation } from "react-router";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import logo from "figma:asset/93b3fae3eb97ab9525c7d6cddf6a333926c8f7b3.png";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/services", label: "Services" },
    { path: "/ev-hybrid", label: "EV & Hybrid", special: "green" },
    { path: "/gallery", label: "Gallery" },
    { path: "/booking", label: "Online Booking" },
    { path: "/about", label: "About Us" },
    { path: "/contact", label: "Contact Us" },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? "bg-[#000000]/98 backdrop-blur-md border-b border-[#0368D3]/30 shadow-lg shadow-[#0368D3]/5" 
        : "bg-[#000000]/95 backdrop-blur-sm border-b border-[#0368D3]/20"
    }`}>
        <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 transition-transform hover:scale-105">
            <img src={logo} alt="AutoHub Service Centre" className="h-28 md:h-32" />
            <div className="hidden md:flex flex-col">
              <span className="text-white font-bold text-lg md:text-xl leading-tight">AutoHub Service Centre</span>
              <span className="text-[#0368D3] text-sm md:text-base leading-tight">Driven by trust, Powered by expertise.</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-base md:text-lg transition-colors relative ${
                  link.special === "green"
                    ? isActive(link.path)
                      ? "text-[#10B981] animate-pulse"
                      : "text-[#10B981] hover:text-[#10B981]/80 animate-pulse"
                    : isActive(link.path)
                    ? "text-[#0368D3]"
                    : "text-[#DEDEDE] hover:text-[#0368D3]"
                }`}
              >
                {link.label}
                {isActive(link.path) && (
                  <span className={`absolute -bottom-1 left-0 right-0 h-0.5 ${
                    link.special === "green" ? "bg-[#10B981]" : "bg-[#0368D3]"
                  }`} />
                )}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-[#DEDEDE] hover:text-[#0368D3] transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 flex flex-col gap-4 animate-in slide-in-from-top-2 duration-300">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`text-xl py-2 transition-colors ${
                  link.special === "green"
                    ? "text-[#10B981]"
                    : isActive(link.path)
                    ? "text-[#0368D3]"
                    : "text-[#DEDEDE] hover:text-[#0368D3]"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}