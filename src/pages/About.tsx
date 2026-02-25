import aboutBg from "@/assets/about-bg.jpg";

const About = () => {
  return (
    <div className="pt-16 md:pt-20">
      {/* Hero */}
      <section className="relative h-64 md:h-80 overflow-hidden">
        <img src={aboutBg} alt="About Kaizen Preschool" className="w-full h-full object-cover" />
        <div className="absolute inset-0 gradient-overlay" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-3xl md:text-5xl font-black text-primary-foreground">About Us</h1>
        </div>
      </section>

      {/* Philosophy */}
      <section className="section-padding">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-black mb-4">
            Our <span className="text-primary">Philosophy</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            "Kaizen" is a Japanese word meaning <strong>continuous improvement</strong>. At Kaizen Preschool, 
            we believe every child is unique and full of potential. Our philosophy is centered around nurturing 
            each child's natural curiosity and love for learning through a structured yet joyful environment.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            We focus on building strong foundations — academically, physically, emotionally, and socially — 
            that prepare children not just for school, but for life.
          </p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-padding bg-muted/50">
        <div className="container mx-auto max-w-3xl grid md:grid-cols-2 gap-8">
          <div className="bg-card rounded-2xl p-8 kaizen-shadow">
            <div className="text-3xl mb-3">🎯</div>
            <h3 className="text-xl font-bold mb-3 text-kaizen-purple">Our Vision</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              To be a leading preschool that inspires lifelong learning, creativity, and character in every child, 
              creating a generation of confident, compassionate, and capable individuals.
            </p>
          </div>
          <div className="bg-card rounded-2xl p-8 kaizen-shadow">
            <div className="text-3xl mb-3">🚀</div>
            <h3 className="text-xl font-bold mb-3 text-kaizen-blue">Our Mission</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              To provide a safe, nurturing, and stimulating environment where children develop holistically 
              through play-based learning, values education, and active physical development.
            </p>
          </div>
        </div>
      </section>

      {/* Founder's Message */}
      <section className="section-padding">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-black mb-4">
            Founder's <span className="text-primary">Message</span>
          </h2>
          <div className="bg-primary/5 rounded-2xl p-8 border-l-4 border-primary">
            <p className="text-muted-foreground leading-relaxed italic">
              "Every child deserves a strong beginning. At Kaizen Preschool, we are committed to creating an 
              environment where children feel safe, loved, and inspired to explore. Our focus on Sanskaar, 
              discipline, and holistic development ensures that your child grows into a confident and kind 
              human being. We believe that the early years are the most important, and we take this 
              responsibility with utmost sincerity."
            </p>
            <p className="mt-4 font-bold text-primary">— Founder, Kaizen Preschool</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
