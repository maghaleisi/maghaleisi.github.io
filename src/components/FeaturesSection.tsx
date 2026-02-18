import { useLang } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { Shield, Clock, Gift, CheckCircle } from "lucide-react";

const featureCards = [
  {
    icon: Shield,
    titleEn: "100% Plagiarism Free",
    titleFa: "بدون سرقت ادبی",
    descEn:
      "Every paper is written from scratch and checked through advanced plagiarism detection tools to ensure complete originality.",
    descFa:
      "هر مقاله از ابتدا نوشته شده و توسط ابزارهای پیشرفته بررسی سرقت ادبی بررسی می‌شود.",
  },
  {
    icon: Clock,
    titleEn: "On-Time Delivery",
    titleFa: "تحویل به‌موقع",
    descEn:
      "We guarantee timely delivery of your academic work, no matter how tight the deadline. Your schedule is our priority.",
    descFa:
      "ما تحویل به‌موقع کار آکادمیک شما را تضمین می‌کنیم، مهم نیست ددلاین چقدر فشرده باشد.",
  },
];

const includedItems = [
  { nameEn: "Title Page", nameFa: "صفحه عنوان", priceEn: "$5", priceFa: "$5" },
  { nameEn: "Bibliography", nameFa: "کتاب‌نامه", priceEn: "$15", priceFa: "$15" },
  { nameEn: "Formatting", nameFa: "فرمت‌بندی", priceEn: "$10", priceFa: "$10" },
  { nameEn: "Plagiarism Report", nameFa: "گزارش سرقت ادبی", priceEn: "$20", priceFa: "$20" },
  { nameEn: "Unlimited Revisions", nameFa: "ویرایش نامحدود", priceEn: "$30", priceFa: "$30" },
];

const FeaturesSection = () => {
  const { t } = useLang();

  return (
    <section className="bg-white" style={{ padding: "80px 16px" }}>
      <div className="container-custom">
        {/* Section header */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-bold leading-tight mb-4"
            style={{ fontSize: "36px", color: "#1a1a2e" }}
          >
            {t(
              "خدمات نگارش آکادمیک با ویژگی‌های برتر",
              "Academic Writing Service\nPowered by Features"
            )}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            style={{ fontSize: "16px", color: "#777" }}
            className="max-w-2xl mx-auto"
          >
            {t(
              "ویژگی‌هایی که خدمات نگارش آکادمیک ما را منحصربه‌فرد می‌کنند!",
              "Perceive these hallmarks that make our custom academic writing service truly unique!"
            )}
          </motion.p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Feature cards */}
          {featureCards.map((card, i) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white border border-border rounded-xl"
                style={{ padding: "32px", borderRadius: "12px" }}
              >
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center mb-5"
                  style={{ backgroundColor: "rgba(43,192,180,0.1)" }}
                >
                  <Icon className="h-6 w-6" style={{ color: "#2BC0B4" }} />
                </div>
                <h3
                  className="font-bold mb-3"
                  style={{ fontSize: "22px", color: "#1a1a2e" }}
                >
                  {t(card.titleFa, card.titleEn)}
                </h3>
                <p style={{ fontSize: "15px", color: "#777", lineHeight: 1.7 }}>
                  {t(card.descFa, card.descEn)}
                </p>
              </motion.div>
            );
          })}

          {/* What's included card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="rounded-xl"
            style={{
              padding: "32px",
              borderRadius: "12px",
              backgroundColor: "#ddeef8",
            }}
          >
            <div
              className="w-12 h-12 rounded-lg flex items-center justify-center mb-5"
              style={{ backgroundColor: "rgba(43,192,180,0.15)" }}
            >
              <Gift className="h-6 w-6" style={{ color: "#2BC0B4" }} />
            </div>
            <h3
              className="font-bold mb-5"
              style={{ fontSize: "22px", color: "#1a1a2e" }}
            >
              {t("شامل چه مواردی است", "What's included")}
            </h3>
            <div className="flex flex-col">
              {includedItems.map((item, i) => (
                <div key={i}>
                  <div className="flex items-center justify-between py-3">
                    <span
                      className="font-medium"
                      style={{ fontSize: "15px", color: "#1a1a2e" }}
                    >
                      {t(item.nameFa, item.nameEn)}
                    </span>
                    <div className="flex items-center gap-2">
                      <span
                        className="line-through"
                        style={{ fontSize: "14px", color: "#aaa" }}
                      >
                        {t(item.priceFa, item.priceEn)}
                      </span>
                      <span
                        className="font-bold"
                        style={{ fontSize: "14px", color: "#2BC0B4" }}
                      >
                        FREE
                      </span>
                    </div>
                  </div>
                  {i < includedItems.length - 1 && (
                    <div
                      className="w-full"
                      style={{ height: "1px", backgroundColor: "#ccc" }}
                    />
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
