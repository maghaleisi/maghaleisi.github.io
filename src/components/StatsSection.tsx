import { useLang } from "@/contexts/LanguageContext";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const stats = [
  { valueFa: "۵۰۰+", valueEn: "500+", num: 500, labelFa: "پروژه موفق", labelEn: "Successful Projects" },
  { valueFa: "۹۸٪", valueEn: "98%", num: 98, labelFa: "رضایت مشتریان", labelEn: "Client Satisfaction" },
  { valueFa: "۱۰+", valueEn: "10+", num: 10, labelFa: "سال تجربه", labelEn: "Years Experience" },
  { valueFa: "۲۴/۷", valueEn: "24/7", num: 24, labelFa: "پشتیبانی آنلاین", labelEn: "Online Support" },
];

const Counter = ({ target, suffix = "" }: { target: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const step = Math.max(1, Math.floor(target / (duration / 16)));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
};

const StatsSection = () => {
  const { lang, t } = useLang();

  return (
    <section className="bg-primary py-16 px-4">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-extrabold text-accent mb-2">
                {lang === "fa" ? s.valueFa : (
                  <>
                    <Counter target={s.num} />
                    {s.valueEn.includes("+") ? "+" : s.valueEn.includes("%") ? "%" : s.valueEn.includes("/") ? "/7" : ""}
                  </>
                )}
              </div>
              <div className="text-sm text-cream/80">
                {t(s.labelFa, s.labelEn)}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
