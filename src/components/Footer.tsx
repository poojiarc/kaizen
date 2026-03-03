import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, Instagram } from "lucide-react";
import logo from "@/assets/logo.png";

const socialLinks = [
  { icon: "instagram", label: "Instagram", href: "https://www.instagram.com/kaizen.preschoolnallagandla/" },
  { icon: "facebook", label: "Facebook", href: "https://www.facebook.com/kaizenpreschoolofficial/" },
  { icon: "linkedin", label: "LinkedIn", href: "https://in.linkedin.com/in/kaizen-preschool-nallagandla-365883380" },
  { icon: "proeves", label: "Proeves", href: "https://www.proeves.com/telangana/hyderabad/nallagandla/preschool-nallagandla/kaizen-pre-school-12915" },
];

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
                <a href="https://www.instagram.com/kaizen.preschoolnallagandla/" target="_blank" rel="noopener noreferrer" className="hover:text-primary-foreground">
                  @kaizen.preschoolnallagandla
                </a>
              </li>
            </ul>

            {/* Follow Us */}
            <h4 className="font-bold text-lg mt-6 mb-3">Follow Us</h4>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors text-primary-foreground/70 hover:text-primary-foreground"
                  aria-label={social.label}
                >
                  {social.icon === "facebook" ? (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                  ) : social.icon === "linkedin" ? (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                  ) : social.icon === "proeves" ? (
                    <span className="text-xs font-black">P</span>
                  ) : (
                    <Instagram size={16} />
                  )}
                </a>
              ))}
            </div>
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
