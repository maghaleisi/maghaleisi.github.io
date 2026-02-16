import { useLang } from "@/contexts/LanguageContext";
import { Phone, Mail, MapPin, Send } from "lucide-react";

const Footer = () => {
  const { t } = useLang();

  const services = [
    t("پایان‌نامه ادبیات انگلیسی", "English Literature Thesis"),
    t("پایان‌نامه روانشناسی", "Psychology Thesis"),
    t("مقاله ISI", "ISI Article Writing"),
    t("پروپوزال", "Proposal Writing"),
    t("ویرایش و بازخوانی", "Editing & Proofreading"),
    t("ترجمه تخصصی", "Specialized Translation"),
  ];

  const quickLinks = [
    t("درباره ما", "About Us"),
    t("نمونه کارها", "Portfolio"),
    t("وبلاگ", "Blog"),
    t("سوالات متداول", "FAQ"),
    t("تعرفه‌ها", "Pricing"),
    t("تماس با ما", "Contact"),
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              {t("پژوهش‌یار", "AcademiaPen")}
            </h3>
            <p className="text-sm opacity-80 leading-7 mb-6">
              {t(
                "ارائه‌دهنده خدمات تخصصی نگارش پایان‌نامه و مقاله ISI در حوزه‌های ادبیات انگلیسی، روانشناسی و زبان‌شناسی.",
                "Specialized academic writing services for English Literature, Psychology, and Linguistics theses and ISI articles."
              )}
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">{t("خدمات", "Services")}</h4>
            <ul className="space-y-2">
              {services.map((s) => (
                <li key={s}>
                  <a href="#services" className="text-sm opacity-75 hover:opacity-100 transition-opacity">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-semibold mb-4">{t("لینک‌های مفید", "Quick Links")}</h4>
            <ul className="space-y-2">
              {quickLinks.map((l) => (
                <li key={l}>
                  <a href="#" className="text-sm opacity-75 hover:opacity-100 transition-opacity">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">{t("تماس با ما", "Contact Us")}</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 opacity-80">
                <Phone className="h-4 w-4 shrink-0" />
                <span dir="ltr">+98 915 061 6788</span>
              </li>
              <li className="flex items-center gap-2 opacity-80">
                <Mail className="h-4 w-4 shrink-0" />
                <span>info@academiapen.com</span>
              </li>
              <li className="flex items-center gap-2 opacity-80">
                <Send className="h-4 w-4 shrink-0" />
                <span>{t("تلگرام و واتساپ", "Telegram & WhatsApp")}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-primary-foreground/15 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs opacity-60">
          <span>
            © {new Date().getFullYear()} {t("پژوهش‌یار. تمامی حقوق محفوظ است.", "AcademiaPen. All rights reserved.")}
          </span>
          <div className="flex gap-4">
            <a href="#">{t("حریم خصوصی", "Privacy Policy")}</a>
            <a href="#">{t("قوانین و مقررات", "Terms of Service")}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
