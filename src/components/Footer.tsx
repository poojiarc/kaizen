import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, Instagram } from "lucide-react";
import logo from "@/assets/logo.png";

const quickLinks = [
  { label: "🏠 Home", path: "/" },
  { label: "👩‍🏫 About", path: "/about" },
  { label: "📘 Curriculum", path: "/curriculum" },
  { label: "🖼 Gallery", path: "/gallery" },
  { label: "📝 Admission", path: "/admission" },
  { label: "📞 Contact", path: "/contact" },
];

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container mx-auto section-padding">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <img src={logo} alt="Kaizen Preschool" className="h-14 w-auto mb-4 brightness-0 invert" />
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Building Strong Foundations for Bright Futures 🌟
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="font-bold text-lg mb-4">Contact Details</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              <li className="flex items-start gap-2">
                <Phone size={16} className="mt-0.5 shrink-0" />
                <a href="tel:+919966909346" className="hover:text-primary-foreground">+91 81797 68181</a>
              </li>
              <li className="flex items-start gap-2">
                <Mail size={16} className="mt-0.5 shrink-0" />
                <a href="mailto:info@kaizenpreschool.in" className="hover:text-primary-foreground">info@kaizenpreschool.in</a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 shrink-0" />
                <span>Huda Layout Nallagandla</span>
              </li>
              <li className="flex items-start gap-2">
                <Clock size={16} className="mt-0.5 shrink-0" />
                <span>Mon–Sat: 8:30 AM – 4:00 PM</span>
              </li>
              <li className="flex items-start gap-2">
                <Instagram size={16} className="mt-0.5 shrink-0" />
                <a href="https://instagram.com/kaizenpreschool" target="_blank" rel="noopener noreferrer" className="hover:text-primary-foreground">
                  @kaizenpreschool
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10 py-6">
        <div className="text-center space-y-2">
          <div className="flex justify-center items-center gap-1 text-sm text-primary-foreground/60">
            Made with ❤️ by
            <a
              href="https://staffarc.in"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-kaizen-orange hover:underline"
            >
              <img
                src="https://www.staffarc.in/images/Staffarc-logo.png"
                alt="StaffArc"
                className="h-5 w-5 object-contain"
              />
              StaffArc
            </a>
          </div>
          <p className="text-primary-foreground/40 text-xs">
            © 2026 Kaizen PreSchool. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
