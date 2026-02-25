import { Link } from "react-router-dom";
import playgroup from "@/assets/program-playgroup.jpg";
import nursery from "@/assets/program-nursery.jpg";
import lkg from "@/assets/program-lkg.jpg";
import ukg from "@/assets/program-ukg.jpg";

const programs = [
  { title: "Playgroup", age: "2–3 Years", icon: "🌼", img: playgroup },
  { title: "Nursery", age: "3–4 Years", icon: "🌸", img: nursery },
  { title: "LKG", age: "4–5 Years", icon: "🌺", img: lkg },
  { title: "UKG", age: "5–6 Years", icon: "🌻", img: ukg },
];

const ProgramsSection = () => {
  return (
    <section className="section-padding">
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-4xl font-black text-center mb-3">
          Our <span className="text-primary">Programs</span>
        </h2>
        <p className="text-muted-foreground text-center mb-10 max-w-lg mx-auto">
          Age-appropriate programs designed to nurture every child's potential
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((p, i) => (
            <Link
              to="/admission"
              key={i}
              className="group relative rounded-2xl overflow-hidden aspect-[4/5] kaizen-shadow hover:kaizen-shadow-hover transition-all duration-300 hover:-translate-y-2"
            >
              <img
                src={p.img}
                alt={p.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <span className="text-3xl mb-2 block">{p.icon}</span>
                <h3 className="text-primary-foreground font-bold text-xl">{p.title}</h3>
                <p className="text-primary-foreground/70 text-sm">{p.age}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
