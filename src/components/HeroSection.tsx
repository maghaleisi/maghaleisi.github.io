import { useLang } from "@/contexts/LanguageContext";
import type { ReactNode } from "react";
import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.png";
import PriceCalculator from "@/components/PriceCalculator";

const HeroSection = () => {
  const { t, lang } = useLang();

  return (
    <section
      id="hero"
      className="relative min-h-[90vh] flex items-center overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #c8edd8 0%, #d6ecf5 40%, #FFFFFF 100%)",
      }}
    >
      {/* Background image - stationery items */}
      <img
        src={heroBg}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover object-center"
        style={{ opacity: 0.85 }}
      />

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
              {lang === "fa" ? (
                "خدمات تخصصی نگارش پایان‌نامه و مقاله ISI"
              ) : (
                <>
                  <span style={{ color: "#1a1a2e" }}>Professional </span>
                  <span style={{ color: "#2BC0B4" }}>Academic Writing </span>
                  <span style={{ color: "#4CAF7D" }}>Services</span>
                </>
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
              className="text-sm md:text-base max-w-xl"
              style={{ color: "#555555" }}
            >
              {t(
                "با بیش از ۱۰ سال تجربه، به صدها دانشجوی ایرانی کمک کرده‌ایم تا با موفقیت از پایان‌نامه خود دفاع کنند",
                "With 10+ years of experience, we've helped hundreds of Iranian students successfully defend their theses."
              )}
            </motion.p>
          </div>

          {/* Right: Price Calculator */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center lg:justify-end"
          >
            <PriceCalculator />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
