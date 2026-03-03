import { Link } from "react-router-dom";
import { Phone } from "lucide-react";

const AdmissionsOpenBanner = () => {
  return (
    <section className="section-padding bg-primary">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl md:text-4xl font-black text-primary-foreground mb-4">
          🎉 Admissions Open for 2025–26!
        </h2>
        <p className="text-primary-foreground/80 mb-8 max-w-lg mx-auto">
          Limited seats available. Enroll your child today for a joyful and enriching learning experience.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="https://wa.me/919966909346?text=Hi%2C%20I%20would%20like%20to%20know%20more%20about%20admissions%20at%20Kaizen%20Preschool"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary-foreground text-primary font-bold hover:opacity-90 transition-opacity shadow-lg"
          >
            <Phone size={18} />
            Call Now
          </a>
          <Link
            to="/admission"
            className="inline-flex items-center px-6 py-3 rounded-full border-2 border-primary-foreground text-primary-foreground font-bold hover:bg-primary-foreground/10 transition-colors"
          >
            📝 Apply Online
          </Link>
        </div>
        <p className="text-primary-foreground/60 text-sm mt-6">
          📍 Huda Layout Nallagandla
        </p>
      </div>
    </section>
  );
};

export default AdmissionsOpenBanner;
