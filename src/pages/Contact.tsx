import { Phone, Mail, MapPin, Clock, Instagram, MessageCircle } from "lucide-react";

const contactInfo = [
  { icon: Phone, label: "Phone", value: "+91 99669 09346", href: "tel:+919966909346" },
  { icon: MessageCircle, label: "WhatsApp", value: "Chat with us on WhatsApp", href: "https://wa.me/919966909346?text=Hi%2C%20I%20would%20like%20to%20know%20more%20about%20Kaizen%20Preschool", isWhatsApp: true },
  { icon: Mail, label: "Email", value: "info@kaizenpreschool.in", href: "mailto:info@kaizenpreschool.in" },
  { icon: MapPin, label: "Address", value: "Nallagandla, Hyderabad, Telangana 500019" },
  { icon: Clock, label: "Working Hours", value: "Mon–Sat: 8:30 AM – 4:00 PM" },
  { icon: Instagram, label: "Instagram", value: "@kaizenpreschool", href: "https://instagram.com/kaizenpreschool" },
];

const Contact = () => {
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
                  <div key={i} className={`flex items-start gap-4 rounded-2xl p-5 kaizen-shadow ${(item as any).isWhatsApp ? 'bg-kaizen-green/10 border border-kaizen-green/20' : 'bg-card'}`}>
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${(item as any).isWhatsApp ? 'bg-kaizen-green/20 text-kaizen-green' : 'bg-primary/10 text-primary'}`}>
                      <item.icon size={20} />
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground font-semibold uppercase tracking-wider">{item.label}</div>
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

            {/* Map */}
            <div className="rounded-2xl overflow-hidden kaizen-shadow h-[400px] md:h-auto">
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
        </div>
      </section>
    </div>
  );
};

export default Contact;
