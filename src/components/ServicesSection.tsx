import { useLang } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { BookOpen, Brain, Languages, FileText, PenTool, Globe } from "lucide-react";

const services = [
  {
    icon: BookOpen,
    fa: "نگارش پایان‌نامه ادبیات انگلیسی",
    en: "English Literature Thesis",
    descFa: "نگارش تخصصی پایان‌نامه برای مقاطع ارشد و دکتری در تمام گرایش‌های ادبیات انگلیسی، از نقد ادبی تا مطالعات فرهنگی.",
    descEn: "Specialized thesis writing for MA & PhD across all English Literature tracks, from Literary Criticism to Cultural Studies.",
  },
  {
    icon: Brain,
    fa: "پایان‌نامه روانشناسی و روان‌کاوی",
    en: "Psychology & Psychoanalysis",
    descFa: "پوشش کامل گرایش‌های بالینی، اجتماعی، شناختی و روان‌کاوی با رویکرد پژوهشی معتبر.",
    descEn: "Complete coverage of clinical, social, cognitive psychology & psychoanalysis with rigorous research methodology.",
  },
  {
    icon: FileText,
    fa: "مقاله‌نویسی ISI و Scopus",
    en: "ISI & Scopus Articles",
    descFa: "نگارش و چاپ تضمینی مقالات در مجلات معتبر بین‌المللی با نرخ پذیرش بالای ۹۰٪.",
    descEn: "Guaranteed writing and publication in prestigious international journals with 90%+ acceptance rate.",
  },
  {
    icon: PenTool,
    fa: "پروپوزال و طرح تحقیق",
    en: "Proposal Writing",
    descFa: "تدوین پروپوزال استاندارد با ساختار علمی دقیق، متناسب با الزامات هر دانشگاه.",
    descEn: "Standard proposal development with precise scientific structure, tailored to each university's requirements.",
  },
  {
    icon: Languages,
    fa: "ویرایش و ترجمه تخصصی",
    en: "Editing & Translation",
    descFa: "ویراستاری حرفه‌ای توسط بومی‌های زبان انگلیسی و ترجمه تخصصی متون آکادمیک.",
    descEn: "Professional editing by native English speakers and specialized academic translation services.",
  },
  {
    icon: Globe,
    fa: "مشاوره و انتخاب موضوع",
    en: "Topic Consultation",
    descFa: "راهنمایی در انتخاب موضوع پایان‌نامه، تعیین روش تحقیق و چارچوب نظری.",
    descEn: "Guidance in thesis topic selection, research methodology, and theoretical framework design.",
  },
];

const ServicesSection = () => {
  const { t } = useLang();

  return (
    <section id="services" className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-14">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-accent font-semibold text-sm uppercase tracking-wider"
          >
            {t("خدمات ما", "Our Services")}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-foreground mt-2"
          >
            {t("خدمات تخصصی نگارش آکادمیک", "Specialized Academic Writing Services")}
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group bg-card rounded-lg p-6 shadow-card hover:shadow-card-hover transition-all duration-300 border border-border hover:border-accent/40"
              >
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <Icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {t(s.fa, s.en)}
                </h3>
                <p className="text-sm text-muted-foreground leading-7">
                  {t(s.descFa, s.descEn)}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
