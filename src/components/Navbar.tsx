import { useState } from "react";
import { useLang } from "@/contexts/LanguageContext";
import { Menu, X, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const { lang, t, toggleLang } = useLang();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { label: t("صفحه اصلی", "Home"), href: "#hero" },
    { label: t("خدمات", "Services"), href: "#services" },
    { label: t("فرآیند کار", "Process"), href: "#process" },
    { label: t("نظرات مشتریان", "Testimonials"), href: "#testimonials" },
    { label: t("تعرفه‌ها", "Pricing"), href: "#pricing" },
    { label: t("تماس با ما", "Contact"), href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 inset-x-0 z-50 bg-card/80 backdrop-blur-lg border-b border-border shadow-sm">
      <div className="container-custom flex items-center justify-between h-16 px-4">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2">
          <span className="text-xl font-bold text-primary">
            {t("پژوهش‌یار", "AcademiaPen")}
          </span>
          <span className="hidden sm:inline text-xs text-muted-foreground">
            {t("خدمات نگارش آکادمیک", "Academic Writing Services")}
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-foreground/75 hover:text-accent transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          {/* Language toggle */}
          <Button
            variant="outline"
            size="sm"
            onClick={toggleLang}
            className="gap-1.5 text-xs"
          >
            <Globe className="h-3.5 w-3.5" />
            {lang === "fa" ? "EN" : "فا"}
          </Button>

          {/* CTA */}
          <Button size="sm" className="hidden sm:inline-flex bg-accent text-accent-foreground hover:bg-gold-dark">
            {t("مشاوره رایگان", "Free Consult")}
          </Button>

          {/* Mobile menu toggle */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden bg-card border-b border-border overflow-hidden"
          >
            <div className="container-custom py-4 px-4 flex flex-col gap-3">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-foreground/80 hover:text-accent py-2"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <Button className="bg-accent text-accent-foreground hover:bg-gold-dark w-full mt-2">
                {t("مشاوره رایگان", "Free Consultation")}
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
