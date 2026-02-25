import { Shield, Users, BookOpen, GraduationCap, MessageCircle, Dumbbell } from "lucide-react";

const items = [
  { icon: Shield, title: "Safe & Hygienic Environment", color: "text-kaizen-green" },
  { icon: Users, title: "Low Student-Teacher Ratio", color: "text-kaizen-blue" },
  { icon: BookOpen, title: "Activity-Based Curriculum", color: "text-kaizen-purple" },
  { icon: GraduationCap, title: "Focus on Discipline & Manners", color: "text-kaizen-orange" },
  { icon: MessageCircle, title: "Regular Parent Interaction", color: "text-kaizen-yellow" },
  { icon: Dumbbell, title: "Sports & Physical Fitness", color: "text-kaizen-red" },
];

const WhatMakesDifferent = () => {
  return (
    <section className="section-padding bg-muted/50">
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-4xl font-black text-center mb-10">
          What Makes Us <span className="text-primary">Different</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <div
              key={i}
              className="flex items-start gap-4 bg-card rounded-2xl p-5 kaizen-shadow hover:kaizen-shadow-hover transition-all duration-300"
            >
              <div className={`shrink-0 ${item.color}`}>
                <item.icon size={28} />
              </div>
              <h3 className="font-bold">{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatMakesDifferent;
