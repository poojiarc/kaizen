import { BookOpen, Calculator, Dumbbell, Palette, Heart } from "lucide-react";

const areas = [
  {
    icon: BookOpen,
    title: "Language Development",
    desc: "Phonics, storytelling, vocabulary building, and early reading & writing skills through fun, interactive activities.",
    color: "bg-kaizen-blue/10 text-kaizen-blue",
  },
  {
    icon: Calculator,
    title: "Numeracy Skills",
    desc: "Number recognition, counting, sorting, patterns, and basic math concepts through hands-on play and games.",
    color: "bg-kaizen-green/10 text-kaizen-green",
  },
  {
    icon: Dumbbell,
    title: "Physical Development",
    desc: "Daily sports, yoga, dance, and outdoor play to build gross and fine motor skills, coordination, and fitness.",
    color: "bg-kaizen-red/10 text-kaizen-red",
  },
  {
    icon: Palette,
    title: "Creative Expression",
    desc: "Art, craft, music, drama, and imaginative play to foster creativity, self-expression, and aesthetic sense.",
    color: "bg-kaizen-orange/10 text-kaizen-orange",
  },
  {
    icon: Heart,
    title: "Social & Emotional Skills",
    desc: "Circle time, group activities, sharing, empathy-building, and conflict resolution for well-rounded social growth.",
    color: "bg-kaizen-purple/10 text-kaizen-purple",
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
        <div className="container mx-auto max-w-4xl">
          <div className="grid gap-6">
            {areas.map((area, i) => (
              <div
                key={i}
                className="flex flex-col sm:flex-row items-start gap-5 bg-card rounded-2xl p-6 md:p-8 kaizen-shadow hover:kaizen-shadow-hover transition-all duration-300"
              >
                <div className={`w-14 h-14 rounded-2xl ${area.color} flex items-center justify-center shrink-0`}>
                  <area.icon size={28} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">{area.title}</h3>
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
