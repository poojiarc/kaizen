import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";

const slides = [hero1, hero2, hero3];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[85vh] md:h-screen overflow-hidden">
      {slides.map((slide, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-1000"
          style={{ opacity: current === i ? 1 : 0 }}
        >
          <img
            src={slide}
            alt={`Kaizen Preschool activity ${i + 1}`}
            className="w-full h-full object-cover"
            loading={i === 0 ? "eager" : "lazy"}
          />
        </div>
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 gradient-overlay" />

      {/* Content */}
      <div className="absolute inset-0 flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl space-y-6 animate-fade-in">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-primary-foreground leading-tight">
              Building Strong Foundations for Bright Futures 🌟
            </h1>
            <p className="text-base md:text-lg text-primary-foreground/85 leading-relaxed max-w-xl">
              At Kaizen Preschool, we nurture confident, curious and happy children
              through structured learning, strong values and joyful experiences.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 rounded-full bg-primary text-primary-foreground font-bold text-sm md:text-base hover:opacity-90 transition-opacity shadow-lg"
              >
                📅 Book a School Visit
              </Link>
              <Link
                to="/admission"
                className="inline-flex items-center px-6 py-3 rounded-full bg-primary-foreground/20 backdrop-blur text-primary-foreground font-bold text-sm md:text-base hover:bg-primary-foreground/30 transition-colors border border-primary-foreground/30"
              >
                📝 Enquire Now
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop arrows */}
      <button
        onClick={() => setCurrent((prev) => (prev - 1 + slides.length) % slides.length)}
        className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 items-center justify-center rounded-full bg-primary-foreground/20 backdrop-blur text-primary-foreground hover:bg-primary-foreground/30 transition-colors"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        onClick={() => setCurrent((prev) => (prev + 1) % slides.length)}
        className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 items-center justify-center rounded-full bg-primary-foreground/20 backdrop-blur text-primary-foreground hover:bg-primary-foreground/30 transition-colors"
      >
        <ChevronRight size={20} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2.5 h-2.5 rounded-full transition-all ${
              current === i ? "bg-primary-foreground w-8" : "bg-primary-foreground/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
