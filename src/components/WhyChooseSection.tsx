import { Heart, Brain, Smile, Award } from "lucide-react";

const items = [
  {
    icon: Heart,
    title: "Strong Body",
    desc: "Daily physical activities & sports",
    color: "bg-kaizen-red/10 text-kaizen-red",
  },
  {
    icon: Brain,
    title: "Sharp Mind",
    desc: "Phonics, numeracy & thinking skills",
    color: "bg-kaizen-blue/10 text-kaizen-blue",
  },
  {
    icon: Smile,
    title: "Happy Child",
    desc: "Emotional and social development",
    color: "bg-kaizen-yellow/10 text-kaizen-orange",
  },
  {
    icon: Award,
    title: "Good Values",
    desc: "Sanskaar & character building",
    color: "bg-kaizen-green/10 text-kaizen-green",
  },
];

const WhyChooseSection = () => {
  return (
    <section className="section-padding bg-muted/50">
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-4xl font-black text-center mb-3">
          Why Choose <span className="text-primary">Kaizen</span>?
        </h2>
        <p className="text-muted-foreground text-center mb-10 max-w-lg mx-auto">
          A holistic approach to early childhood development
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, i) => (
            <div
              key={i}
              className="bg-card rounded-2xl p-6 text-center kaizen-shadow hover:kaizen-shadow-hover transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`w-16 h-16 rounded-2xl ${item.color} flex items-center justify-center mx-auto mb-4`}>
                <item.icon size={28} />
              </div>
              <h3 className="font-bold text-lg mb-1">{item.title}</h3>
              <p className="text-muted-foreground text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
