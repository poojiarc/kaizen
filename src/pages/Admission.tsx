import { useState } from "react";
import { FileText, Eye, CheckCircle, Users } from "lucide-react";

const steps = [
  { icon: FileText, title: "Enquiry", desc: "Fill out our enquiry form online or call us" },
  { icon: Eye, title: "Visit", desc: "Schedule a campus visit and meet our team" },
  { icon: CheckCircle, title: "Confirmation", desc: "Complete registration and fee payment" },
  { icon: Users, title: "Orientation", desc: "Attend parent-child orientation session" },
];

const documents = [
  "Birth certificate",
  "Passport-size photos (4 nos.)",
  "Parent/Guardian ID proof",
  "Address proof",
];

const Admission = () => {
  const [form, setForm] = useState({
    childName: "", dob: "", parentName: "", phone: "", email: "", program: "", visitDate: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your enquiry! We will contact you shortly.");
  };

  return (
    <div className="pt-16 md:pt-20">
      <section className="bg-kaizen-green section-padding text-center">
        <h1 className="text-3xl md:text-5xl font-black text-primary-foreground mb-3">Admissions</h1>
        <p className="text-primary-foreground/80">Begin your child's joyful learning journey with us</p>
      </section>

      {/* Process */}
      <section className="section-padding">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-black text-center mb-10">
            Admission <span className="text-primary">Process</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <div key={i} className="text-center bg-card rounded-2xl p-6 kaizen-shadow">
                <div className="w-14 h-14 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-3">
                  <step.icon size={24} />
                </div>
                <div className="text-xs font-bold text-primary mb-1">Step {i + 1}</div>
                <h3 className="font-bold mb-1">{step.title}</h3>
                <p className="text-muted-foreground text-xs">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Documents */}
      <section className="section-padding bg-muted/50">
        <div className="container mx-auto max-w-md">
          <h2 className="text-2xl font-black text-center mb-6">Documents Required</h2>
          <ul className="space-y-3">
            {documents.map((doc, i) => (
              <li key={i} className="flex items-center gap-3 bg-card rounded-xl p-4 kaizen-shadow">
                <CheckCircle size={18} className="text-kaizen-green shrink-0" />
                <span className="text-sm font-medium">{doc}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Form */}
      <section className="section-padding">
        <div className="container mx-auto max-w-lg">
          <h2 className="text-2xl md:text-3xl font-black text-center mb-8">
            Enquiry <span className="text-primary">Form</span>
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            {[
              { label: "Child's Name", key: "childName", type: "text" },
              { label: "Date of Birth", key: "dob", type: "date" },
              { label: "Parent's Name", key: "parentName", type: "text" },
              { label: "Phone Number", key: "phone", type: "tel" },
              { label: "Email", key: "email", type: "email" },
              { label: "Preferred Visit Date", key: "visitDate", type: "date" },
            ].map((field) => (
              <div key={field.key}>
                <label className="block text-sm font-semibold mb-1.5">{field.label}</label>
                <input
                  type={field.type}
                  required
                  value={form[field.key as keyof typeof form]}
                  onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-card text-foreground focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all text-sm"
                />
              </div>
            ))}

            <div>
              <label className="block text-sm font-semibold mb-1.5">Program Interested</label>
              <select
                required
                value={form.program}
                onChange={(e) => setForm({ ...form, program: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-border bg-card text-foreground focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all text-sm"
              >
                <option value="">Select a program</option>
                <option>Playgroup (2–3 Years)</option>
                <option>Nursery (3–4 Years)</option>
                <option>LKG (4–5 Years)</option>
                <option>UKG (5–6 Years)</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-primary text-primary-foreground font-bold text-sm hover:opacity-90 transition-opacity shadow-lg"
            >
              Submit Enquiry
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Admission;
