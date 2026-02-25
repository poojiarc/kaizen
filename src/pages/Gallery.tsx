import { useState } from "react";
import { X } from "lucide-react";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import aboutBg from "@/assets/about-bg.jpg";
import playgroup from "@/assets/program-playgroup.jpg";
import nursery from "@/assets/program-nursery.jpg";
import lkg from "@/assets/program-lkg.jpg";
import ukg from "@/assets/program-ukg.jpg";

const categories = ["All", "Classroom", "Sports", "Events"];

const images = [
  { src: hero1, cat: "Classroom", alt: "Classroom activities" },
  { src: hero2, cat: "Sports", alt: "Sports area" },
  { src: hero3, cat: "Events", alt: "Art activities" },
  { src: aboutBg, cat: "Classroom", alt: "Classroom setup" },
  { src: playgroup, cat: "Classroom", alt: "Playgroup room" },
  { src: nursery, cat: "Classroom", alt: "Nursery classroom" },
  { src: lkg, cat: "Events", alt: "LKG activities" },
  { src: ukg, cat: "Events", alt: "UKG classroom" },
];

const Gallery = () => {
  const [filter, setFilter] = useState("All");
  const [lightbox, setLightbox] = useState<string | null>(null);

  const filtered = filter === "All" ? images : images.filter((img) => img.cat === filter);

  return (
    <div className="pt-16 md:pt-20">
      <section className="bg-kaizen-blue section-padding text-center">
        <h1 className="text-3xl md:text-5xl font-black text-primary-foreground mb-3">Gallery</h1>
        <p className="text-primary-foreground/80">A glimpse into life at Kaizen Preschool</p>
      </section>

      <section className="section-padding">
        <div className="container mx-auto">
          {/* Filters */}
          <div className="flex justify-center gap-2 mb-10 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2 rounded-full text-sm font-bold transition-all ${
                  filter === cat
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-primary/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Masonry grid */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {filtered.map((img, i) => (
              <button
                key={i}
                onClick={() => setLightbox(img.src)}
                className="block w-full rounded-2xl overflow-hidden kaizen-shadow hover:kaizen-shadow-hover transition-all duration-300 hover:-translate-y-1 break-inside-avoid"
              >
                <img src={img.src} alt={img.alt} className="w-full h-auto" loading="lazy" />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-foreground/90 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-4 right-4 text-primary-foreground p-2"
          >
            <X size={28} />
          </button>
          <img
            src={lightbox}
            alt="Gallery preview"
            className="max-w-full max-h-[85vh] rounded-2xl object-contain"
          />
        </div>
      )}
    </div>
  );
};

export default Gallery;
