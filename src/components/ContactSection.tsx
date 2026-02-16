import { useLang } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Loader2 } from "lucide-react";

const ContactSection = () => {
  const { t } = useLang();
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const form = e.currentTarget;
    try {
      await fetch("https://formspree.io/f/xlgwbdgo", {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      setSent(true);
      form.reset();
    } catch {
      // silent fail
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="section-padding bg-secondary/50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            {t("تماس با ما", "Contact Us")}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
            {t("همین حالا مشاوره رایگان دریافت کنید", "Get Your Free Consultation Now")}
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-xl mx-auto bg-card rounded-xl p-8 shadow-card border border-border"
        >
          {sent ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 rounded-full bg-accent/15 flex items-center justify-center mx-auto mb-4">
                <Send className="h-7 w-7 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                {t("پیام شما ارسال شد!", "Message Sent!")}
              </h3>
              <p className="text-muted-foreground">
                {t("به زودی با شما تماس خواهیم گرفت.", "We'll get back to you soon.")}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  name="name"
                  required
                  maxLength={100}
                  placeholder={t("نام و نام خانوادگی", "Full Name")}
                  className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent"
                />
                <input
                  name="phone"
                  required
                  maxLength={20}
                  placeholder={t("شماره تماس", "Phone Number")}
                  className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent"
                  dir="ltr"
                />
              </div>
              <input
                name="email"
                type="email"
                maxLength={255}
                placeholder={t("ایمیل (اختیاری)", "Email (optional)")}
                className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent"
                dir="ltr"
              />
              <select
                name="service"
                required
                className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent"
              >
                <option value="">{t("نوع خدمات مورد نیاز", "Select Service")}</option>
                <option>{t("پایان‌نامه ادبیات انگلیسی", "English Literature Thesis")}</option>
                <option>{t("پایان‌نامه روانشناسی", "Psychology Thesis")}</option>
                <option>{t("مقاله ISI", "ISI Article")}</option>
                <option>{t("پروپوزال", "Proposal")}</option>
                <option>{t("ویرایش و ترجمه", "Editing & Translation")}</option>
                <option>{t("سایر", "Other")}</option>
              </select>
              <textarea
                name="message"
                required
                maxLength={2000}
                rows={4}
                placeholder={t("توضیحات پروژه", "Project Description")}
                className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent resize-none"
              />
              <Button
                type="submit"
                disabled={loading}
                className="w-full bg-accent text-accent-foreground hover:bg-gold-dark shadow-gold text-base py-6"
              >
                {loading ? (
                  <Loader2 className="h-5 w-5 animate-spin" />
                ) : (
                  <>
                    {t("ارسال درخواست", "Submit Request")}
                    <Send className="h-4 w-4 ms-2" />
                  </>
                )}
              </Button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
