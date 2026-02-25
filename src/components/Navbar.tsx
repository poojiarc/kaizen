import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const navItems = [
  { label: "Home", icon: "🏠", path: "/" },
  { label: "About", icon: "👩‍🏫", path: "/about" },
  { label: "Curriculum", icon: "📘", path: "/curriculum" },
  { label: "Gallery", icon: "🖼", path: "/gallery" },
  { label: "Admission", icon: "📝", path: "/admission" },
  { label: "Contact", icon: "📞", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container mx-auto flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Kaizen Preschool" className="h-10 md:h-14 w-auto" />
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`px-3 py-2 rounded-lg text-sm font-semibold transition-all duration-200 hover:bg-primary/10 hover:text-primary ${
                location.pathname === item.path
                  ? "text-primary bg-primary/10"
                  : "text-foreground/70"
              }`}
            >
              <span className="mr-1">{item.icon}</span>
              {item.label}
            </Link>
          ))}
        </div>

        <div className="hidden lg:block">
          <Link
            to="/contact"
            className="inline-flex items-center px-5 py-2.5 rounded-full bg-primary text-primary-foreground font-bold text-sm hover:opacity-90 transition-opacity shadow-md"
          >
            📅 Book Visit
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 rounded-lg hover:bg-muted"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden bg-background border-t border-border animate-fade-in">
          <div className="container mx-auto py-4 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 rounded-lg font-semibold transition-colors ${
                  location.pathname === item.path
                    ? "text-primary bg-primary/10"
                    : "text-foreground/70 hover:bg-muted"
                }`}
              >
                <span className="mr-2">{item.icon}</span>
                {item.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="block mx-4 mt-3 text-center px-5 py-3 rounded-full bg-primary text-primary-foreground font-bold"
            >
              📅 Book Visit
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
