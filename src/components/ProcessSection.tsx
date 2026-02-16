import { useLang } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";

const steps = [
  { numFa: "۱", numEn: "1", fa: "تماس و مشاوره رایگان", en: "Free Consultation" },
  { numFa: "۲", numEn: "2", fa: "ارسال اطلاعات پروژه", en: "Submit Project Details" },
  { numFa: "۳", numEn: "3", fa: "دریافت قیمت و زمان‌بندی", en: "Receive Quote & Timeline" },
  { numFa: "۴", numEn: "4", fa: "قرارداد و پیش‌پرداخت", en: "Contract & Down Payment" },
  { numFa: "۵", numEn: "5", fa: "شروع نگارش و ارسال پیش‌نویس", en: "Writing & Draft Delivery" },
  { numFa: "۶", numEn: "6", fa: "بازخورد، اصلاحات و تحویل نهایی", en: "Revisions & Final Delivery" },
];

const ProcessSection = () => {
  const { t } = useLang();

  return (
    <section id="process" className="section-padding bg-secondary/50">
      <div className="container-custom">
        <div className="text-center mb-14">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            {t("فرآیند کار", "Our Process")}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
            {t("نحوه سفارش و انجام پروژه", "How We Work Together")}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="relative bg-card rounded-lg p-6 border border-border"
            >
              <div className="w-10 h-10 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold text-lg mb-4">
                {t(s.numFa, s.numEn)}
              </div>
              <h3 className="font-semibold text-foreground">{t(s.fa, s.en)}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
