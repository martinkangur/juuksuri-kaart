import { motion } from "framer-motion";
import { Scissors, Phone, MapPin, Clock, Instagram, Mail } from "lucide-react";
import heroImage from "@/assets/salon-hero.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.7, ease: "easeOut" as const },
  }),
};

const services = [
  { name: "Naiste lõikus", price: "alates 35€" },
  { name: "Meeste lõikus", price: "alates 20€" },
  { name: "Värvimine", price: "alates 55€" },
  { name: "Balayage", price: "alates 90€" },
  { name: "Föönisoengu", price: "alates 25€" },
  { name: "Pidusoengu", price: "alates 50€" },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground font-body">
      {/* Hero */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Salongi interjöör" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-background/70" />
        </div>
        <motion.div
          className="relative z-10 text-center px-6"
          initial="hidden"
          animate="visible"
        >
          <motion.div custom={0} variants={fadeUp} className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12 bg-primary" />
            <Scissors className="w-5 h-5 text-primary" />
            <div className="h-px w-12 bg-primary" />
          </motion.div>
          <motion.h1
            custom={1}
            variants={fadeUp}
            className="font-display text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight text-foreground mb-4"
          >
            Salon <span className="text-primary italic">Kuldne</span>
          </motion.h1>
          <motion.p
            custom={2}
            variants={fadeUp}
            className="text-gold-soft font-light text-lg md:text-xl tracking-[0.2em] uppercase mb-10"
          >
            Juuksurisalong
          </motion.p>
          <motion.a
            custom={3}
            variants={fadeUp}
            href="tel:+3725551234"
            className="inline-block border border-primary text-primary px-8 py-3 text-sm tracking-[0.15em] uppercase hover:bg-primary hover:text-primary-foreground transition-all duration-500"
          >
            Broneeri aeg
          </motion.a>
        </motion.div>
      </section>

      {/* Services */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <motion.h2 custom={0} variants={fadeUp} className="font-display text-3xl md:text-5xl text-foreground mb-4">
              Teenused
            </motion.h2>
            <motion.div custom={1} variants={fadeUp} className="h-px w-16 bg-primary mx-auto" />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="space-y-0"
          >
            {services.map((s, i) => (
              <motion.div
                key={s.name}
                custom={i}
                variants={fadeUp}
                className="flex items-center justify-between py-5 border-b border-border"
              >
                <span className="text-foreground font-light tracking-wide">{s.name}</span>
                <span className="text-primary font-display text-lg">{s.price}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About */}
      <section className="py-24 px-6 bg-card">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-2xl mx-auto text-center"
        >
          <motion.h2 custom={0} variants={fadeUp} className="font-display text-3xl md:text-5xl text-foreground mb-8">
            Meist
          </motion.h2>
          <motion.p custom={1} variants={fadeUp} className="text-muted-foreground leading-relaxed text-lg font-light">
            Salon Kuldne on loodud armastusest ilu vastu. Meie kogenud meeskond pakub personaalset
            lähenemist igale kliendile, kasutades ainult parimaid tooteid ja uusimaid tehnikaid.
            Tule ja lase end hellitada.
          </motion.p>
        </motion.div>
      </section>

      {/* Contact */}
      <section className="py-24 px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-3xl mx-auto"
        >
          <motion.h2 custom={0} variants={fadeUp} className="font-display text-3xl md:text-5xl text-foreground text-center mb-16">
            Kontakt
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-10 text-center">
            <motion.div custom={1} variants={fadeUp}>
              <MapPin className="w-5 h-5 text-primary mx-auto mb-4" />
              <p className="text-muted-foreground font-light text-sm leading-relaxed">
                Viru tänav 12<br />Tallinn, 10140
              </p>
            </motion.div>
            <motion.div custom={2} variants={fadeUp}>
              <Clock className="w-5 h-5 text-primary mx-auto mb-4" />
              <p className="text-muted-foreground font-light text-sm leading-relaxed">
                E–R: 10:00–19:00<br />L: 10:00–16:00<br />P: Suletud
              </p>
            </motion.div>
            <motion.div custom={3} variants={fadeUp}>
              <Phone className="w-5 h-5 text-primary mx-auto mb-4" />
              <p className="text-muted-foreground font-light text-sm leading-relaxed">
                +372 555 1234<br />info@salonkuldne.ee
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-10 px-6">
        <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-xs tracking-[0.1em] uppercase">
            © 2026 Salon Kuldne
          </p>
          <div className="flex gap-5">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="mailto:info@salonkuldne.ee" className="text-muted-foreground hover:text-primary transition-colors">
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
