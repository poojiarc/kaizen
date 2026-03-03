import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Instagram, MessageCircle, Send } from "lucide-react";

const contactInfo = [
  { icon: Phone, label: "Phone", value: "+91 81797 68181", href: "tel:+919966909346" },
  { icon: MessageCircle, label: "WhatsApp", value: "Chat with us on WhatsApp", href: "https://wa.me/919966909346?text=Hi%2C%20I%20would%20like%20to%20know%20more%20about%20Kaizen%20Preschool", isWhatsApp: true },
  { icon: Mail, label: "Email", value: "info@kaizenpreschool.in", href: "mailto:info@kaizenpreschool.in" },
  { icon: MapPin, label: "Address", value: "Huda Layout Nallagandla 500019" },
  { icon: Clock, label: "Working Hours", value: "Mon–Sat: 8:30 AM – 4:00 PM" },
  { icon: Instagram, label: "Instagram", value: "@kaizen.preschoolnallagandla", href: "https://www.instagram.com/kaizen.preschoolnallagandla/" },
];

const socialLinks = [
  { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/kaizen.preschoolnallagandla/", color: "text-pink-500" },
  { icon: "facebook", label: "Facebook", href: "https://www.facebook.com/kaizenpreschoolofficial/", color: "text-blue-600" },
  { icon: "linkedin", label: "LinkedIn", href: "https://in.linkedin.com/in/kaizen-preschool-nallagandla-365883380", color: "text-blue-700" },
  { icon: "proeves", label: "Proeves", href: "https://www.proeves.com/telangana/hyderabad/nallagandla/preschool-nallagandla/kaizen-pre-school-12915", color: "text-kaizen-green" },
];

interface ContactForm {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const Contact = () => {
  const [form, setForm] = useState<ContactForm>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const { name, email, phone, message } = form;
    if (!name.trim() || !email.trim() || !phone.trim() || !message.trim()) return;

    const whatsappMessage = `Hello, I would like to enquire.\n\nName: ${name.trim()}\nEmail: ${email.trim()}\nPhone: ${phone.trim()}\nMessage: ${message.trim()}`;

    const url = `https://wa.me/919966909346?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="pt-16 md:pt-20">
      <section className="bg-kaizen-orange section-padding text-center">
        <h1 className="text-3xl md:text-5xl font-black text-primary-foreground mb-3">Contact Us</h1>
        <p className="text-primary-foreground/80">We'd love to hear from you!</p>
      </section>

      <section className="section-padding">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-10">
            {/* Info */}
            <div>
              <h2 className="text-2xl font-black mb-6">
                Get in <span className="text-primary">Touch</span>
              </h2>
              <div className="space-y-4">
                {contactInfo.map((item, i) => (
                  <div
                    key={i}
                    className={`flex items-start gap-4 rounded-2xl p-5 kaizen-shadow ${
                      item.isWhatsApp ? "bg-kaizen-green/10 border border-kaizen-green/20" : "bg-card"
                    }`}
                  >
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                        item.isWhatsApp ? "bg-kaizen-green/20 text-kaizen-green" : "bg-primary/10 text-primary"
                      }`}
                    >
                      <item.icon size={20} />
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground font-semibold uppercase tracking-wider">
                        {item.label}
                      </div>
                      {item.href ? (
                        <a
                          href={item.href}
                          target={item.href.startsWith("http") ? "_blank" : undefined}
                          rel="noopener noreferrer"
                          className="text-sm font-medium hover:text-primary transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <div className="text-sm font-medium">{item.value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Follow Us */}
            <div className="md:col-span-2">
              <div className="rounded-2xl bg-card p-6 kaizen-shadow">
                <h3 className="text-lg font-bold mb-4">Follow Us</h3>
                <div className="flex items-center gap-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-11 h-11 rounded-xl bg-muted flex items-center justify-center hover:scale-110 transition-transform ${social.color}`}
                      aria-label={social.label}
                    >
                      {social.icon === "facebook" ? (
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                      ) : social.icon === "linkedin" ? (
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                      ) : social.icon === "proeves" ? (
                        <span className="text-xs font-black">P</span>
                      ) : (
                        <Instagram size={20} />
                      )}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="section-padding bg-muted/30">
        <div className="container mx-auto max-w-5xl">
          <div className="rounded-2xl overflow-hidden kaizen-shadow h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.5!2d78.31!3d17.46!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sNallagandla%2C%20Hyderabad!5e0!3m2!1sen!2sin!4v1700000000000"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: 400 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Kaizen Preschool Location"
            />
          </div>
        </div>
      </section>

      {/* WhatsApp Message Form */}
      <section className="section-padding bg-muted/50 hidden">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-black text-center mb-8">
            Send a <span className="text-primary">Message</span>
          </h2>

          <form
            onSubmit={handleWhatsAppSubmit}
            className="bg-card rounded-2xl p-6 md:p-10 kaizen-shadow space-y-6"
          >
            <div>
              <label className="block text-sm font-semibold mb-1.5">Your Name</label>
              <input
                type="text"
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="Enter your name"
                maxLength={100}
                className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all text-sm"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-1.5">Email Address</label>
              <input
                type="email"
                name="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                maxLength={255}
                className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all text-sm"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-1.5">Phone Number</label>
              <input
                type="tel"
                name="phone"
                required
                value={form.phone}
                onChange={handleChange}
                placeholder="Your phone number"
                maxLength={15}
                className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all text-sm"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-1.5">Message</label>
              <textarea
                name="message"
                required
                rows={5}
                value={form.message}
                onChange={handleChange}
                placeholder="Write your message here..."
                maxLength={1000}
                className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all text-sm resize-none"
              />
            </div>

            {/* Submit Button */}
            <div className="relative">
              <button
                type="submit"
                className="w-full h-14 rounded-xl bg-primary text-primary-foreground font-bold text-base hover:opacity-90 transition-all shadow-lg flex items-center justify-center gap-3"
              >
                Send via WhatsApp
                <Send size={18} />
              </button>
              {/* Floating WhatsApp icon */}
              <div className="hidden md:flex absolute -bottom-3 -right-3 w-10 h-10 rounded-full bg-foreground text-primary-foreground items-center justify-center shadow-lg">
                <MessageCircle size={18} />
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
