import { useLang } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { CheckCircle, ArrowLeft, ArrowRight } from "lucide-react";
import heroAcademic from "@/assets/hero-academic.jpg";

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
    <section
      id="hero"
      className="relative min-h-[90vh] flex items-center overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #E8F4F8 0%, #F0F8FF 40%, #FFFFFF 100%)",
      }}
    >
      <div className="relative container-custom px-4 py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-4"
              style={{ color: "#1a1a2e" }}
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
              className="text-lg md:text-xl font-semibold mb-2"
              style={{ color: "#2BC0B4" }}
            >
              {t(
                "ادبیات انگلیسی | روانشناسی | زبان‌شناسی",
                "Humanistic Sciences Papers Written by Humans"
              )}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="text-sm md:text-base mb-8 max-w-xl"
              style={{ color: "#555555" }}
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
                <li key={i} className="flex items-center gap-2 text-sm" style={{ color: "#444444" }}>
                  <CheckCircle className="h-4 w-4 shrink-0" style={{ color: "#2BC0B4" }} />
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
                className="text-base px-8 rounded-full shadow-lg hover:shadow-xl transition-shadow"
                style={{ backgroundColor: "#F5A623", color: "#FFFFFF" }}
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                {t("مشاوره رایگان دریافت کنید", "Get Free Consultation")}
                <Arrow className="h-4 w-4 ms-2" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-base rounded-full border-2"
                style={{ borderColor: "#2BC0B4", color: "#2BC0B4" }}
                onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
              >
                {t("مشاهده خدمات", "View Services")}
              </Button>
            </motion.div>
          </div>

          {/* Right: Decorative Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:flex justify-center"
          >
            <img
              src={heroAcademic}
              alt={t("ابزارهای نوشتن آکادمیک", "Academic writing tools")}
              className="w-full max-w-md rounded-2xl shadow-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
