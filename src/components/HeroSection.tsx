import { useLang } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { CheckCircle, ArrowLeft, ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const { lang, t } = useLang();
  const Arrow = lang === "fa" ? ArrowLeft : ArrowRight;

  const features = [
    t("نگارش تضمینی پایان‌نامه ارشد و دکتری", "Guaranteed MA & PhD Thesis Writing"),
    t("چاپ مقاله در مجلات ISI و Scopus", "ISI & Scopus Journal Publication"),
    t("مشاوره رایگان و پشتیبانی ۲۴/۷", "Free Consultation & 24/7 Support"),
    t("تیم اساتید متخصص ادبیات انگلیسی", "Expert English Literature Faculty Team"),
  ];

  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt={t("خدمات نگارش آکادمیک", "Academic Writing Services")}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-hero-gradient opacity-90" />
      </div>

      <div className="relative container-custom px-4 py-24 md:py-32">
        <div className="max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-cream leading-tight mb-4"
          >
            {t(
              "خدمات تخصصی نگارش پایان‌نامه و مقاله ISI",
              "Professional Academic Writing Services"
            )}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-lg md:text-xl text-gold-light font-medium mb-2"
          >
            {t(
              "ادبیات انگلیسی | روانشناسی | زبان‌شناسی",
              "English Literature | Psychology | Linguistics"
            )}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="text-sm md:text-base text-cream/70 mb-8 max-w-xl"
          >
            {t(
              "با بیش از ۱۰ سال تجربه، به صدها دانشجوی ایرانی کمک کرده‌ایم تا با موفقیت از پایان‌نامه خود دفاع کنند",
              "With 10+ years of experience, we've helped hundreds of Iranian students successfully defend their theses."
            )}
          </motion.p>

          {/* Feature badges */}
          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10"
          >
            {features.map((f, i) => (
              <li key={i} className="flex items-center gap-2 text-cream/90 text-sm">
                <CheckCircle className="h-4 w-4 text-accent shrink-0" />
                {f}
              </li>
            ))}
          </motion.ul>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55 }}
            className="flex flex-wrap gap-3"
          >
            <Button
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-gold-dark shadow-gold text-base px-8"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              {t("مشاوره رایگان دریافت کنید", "Get Free Consultation")}
              <Arrow className="h-4 w-4 ms-2" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-cream/30 text-cream hover:bg-cream/10 text-base"
              onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
            >
              {t("مشاهده خدمات", "View Services")}
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
