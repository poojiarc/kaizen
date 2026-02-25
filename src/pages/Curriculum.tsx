import { BookOpen, Calculator, Dumbbell, Palette, Heart } from "lucide-react";
import currLang from "@/assets/curriculum-language.jpg";
import currNum from "@/assets/curriculum-numeracy.jpg";
import currPhys from "@/assets/curriculum-physical.jpg";
import currCreat from "@/assets/curriculum-creative.jpg";
import currSoc from "@/assets/curriculum-social.jpg";

const areas = [
  {
    icon: BookOpen,
    title: "Language Development",
    desc: "Phonics, storytelling, vocabulary building, and early reading & writing skills through fun, interactive activities.",
    color: "bg-kaizen-blue/10 text-kaizen-blue",
    img: currLang,
  },
  {
    icon: Calculator,
    title: "Numeracy Skills",
    desc: "Number recognition, counting, sorting, patterns, and basic math concepts through hands-on play and games.",
    color: "bg-kaizen-green/10 text-kaizen-green",
    img: currNum,
  },
  {
    icon: Dumbbell,
    title: "Physical Development",
    desc: "Daily sports, yoga, dance, and outdoor play to build gross and fine motor skills, coordination, and fitness.",
    color: "bg-kaizen-red/10 text-kaizen-red",
    img: currPhys,
  },
  {
    icon: Palette,
    title: "Creative Expression",
    desc: "Art, craft, music, drama, and imaginative play to foster creativity, self-expression, and aesthetic sense.",
    color: "bg-kaizen-orange/10 text-kaizen-orange",
    img: currCreat,
  },
  {
    icon: Heart,
    title: "Social & Emotional Skills",
    desc: "Circle time, group activities, sharing, empathy-building, and conflict resolution for well-rounded social growth.",
    color: "bg-kaizen-purple/10 text-kaizen-purple",
    img: currSoc,
  },
];

const Curriculum = () => {
  return (
    <div className="pt-16 md:pt-20">
      {/* Hero */}
      <section className="bg-primary section-padding text-center">
        <h1 className="text-3xl md:text-5xl font-black text-primary-foreground mb-3">Our Curriculum</h1>
        <p className="text-primary-foreground/80 max-w-lg mx-auto">
          A balanced, activity-based curriculum that nurtures every dimension of your child's growth.
        </p>
      </section>

      <section className="section-padding">
        <div className="container mx-auto max-w-5xl">
          <div className="grid gap-8">
            {areas.map((area, i) => (
              <div
                key={i}
                className={`flex flex-col ${i % 2 !== 0 ? "md:flex-row-reverse" : "md:flex-row"} items-stretch gap-0 bg-card rounded-2xl overflow-hidden kaizen-shadow hover:kaizen-shadow-hover transition-all duration-300`}
              >
                {/* Image */}
                <div className="md:w-2/5 h-56 md:h-auto shrink-0">
                  <img
                    src={area.img}
                    alt={area.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>

                {/* Content */}
                <div className="md:w-3/5 p-6 md:p-8 flex flex-col justify-center">
                  <div className={`w-14 h-14 rounded-2xl ${area.color} flex items-center justify-center mb-4`}>
                    <area.icon size={28} />
                  </div>
                  <h3 className="font-bold text-xl mb-2">{area.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{area.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Curriculum;
