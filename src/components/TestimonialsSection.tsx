import { useLang } from "@/contexts/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    nameFa: "سارا محمدی", nameEn: "Sara M.",
    fieldFa: "دکتری ادبیات انگلیسی، دانشگاه تهران", fieldEn: "PhD English Literature, University of Tehran",
    textFa: "با کمک این موسسه، پایان‌نامه ادبیات انگلیسی‌ام با نمره عالی تایید شد. تیم بسیار حرفه‌ای و دقیق بودند.",
    textEn: "With their help, my English literature thesis was approved with an excellent grade. Very professional and thorough team.",
    rating: 5,
  },
  {
    nameFa: "علی رضایی", nameEn: "Ali R.",
    fieldFa: "ارشد روانشناسی بالینی، دانشگاه شهید بهشتی", fieldEn: "MA Clinical Psychology, Shahid Beheshti University",
    textFa: "مقاله ISI من در کمتر از ۳ ماه در مجله معتبر Q1 پذیرفته شد. واقعاً سپاسگزارم.",
    textEn: "My ISI article was accepted in a Q1 journal in less than 3 months. Truly grateful.",
    rating: 5,
  },
  {
    nameFa: "مریم حسینی", nameEn: "Maryam H.",
    fieldFa: "ارشد زبان‌شناسی، دانشگاه اصفهان", fieldEn: "MA Linguistics, University of Isfahan",
    textFa: "پروپوزالم با یک بار ارائه تایید شد. مشاوره‌های دقیق و علمی ایشان بسیار کمک‌کننده بود.",
    textEn: "My proposal was approved on the first submission. Their precise scientific consultation was incredibly helpful.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const { lang, t } = useLang();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent((c) => (c + 1) % testimonials.length), 5000);
    return () => clearInterval(timer);
  }, []);

  const testi = testimonials[current];

  return (
    <section id="testimonials" className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-10">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            {t("نظرات مشتریان", "Testimonials")}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
            {t("مشتریان ما چه می‌گویند؟", "What Our Clients Say")}
          </h2>
        </div>

        <div className="max-w-2xl mx-auto text-center relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="bg-card rounded-xl p-8 shadow-card border border-border"
            >
              <div className="flex justify-center gap-1 mb-4">
                {Array.from({ length: testi.rating }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-accent fill-accent" />
                ))}
              </div>
              <p className="text-foreground leading-8 text-lg mb-6">
                "{t(testi.textFa, testi.textEn)}"
              </p>
              <p className="font-bold text-foreground">{t(testi.nameFa, testi.nameEn)}</p>
              <p className="text-sm text-muted-foreground">{t(testi.fieldFa, testi.fieldEn)}</p>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center gap-4 mt-6">
            <button
              onClick={() => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length)}
              className="p-2 rounded-full border border-border hover:bg-muted transition-colors"
            >
              {lang === "fa" ? <ChevronRight className="h-5 w-5" /> : <ChevronLeft className="h-5 w-5" />}
            </button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${i === current ? "bg-accent" : "bg-border"}`}
                />
              ))}
            </div>
            <button
              onClick={() => setCurrent((c) => (c + 1) % testimonials.length)}
              className="p-2 rounded-full border border-border hover:bg-muted transition-colors"
            >
              {lang === "fa" ? <ChevronLeft className="h-5 w-5" /> : <ChevronRight className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
