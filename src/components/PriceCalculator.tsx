import { useState } from "react";
import { useLang } from "@/contexts/LanguageContext";
import { Calculator, ChevronDown, Minus, Plus } from "lucide-react";

const PriceCalculator = () => {
  const { t } = useLang();
  const [workType, setWorkType] = useState("rewriting");
  const [level, setLevel] = useState("highschool");
  const [pages, setPages] = useState(1);
  const [urgencyDays, setUrgencyDays] = useState(14);

  const basePrice = 7;
  const centsPrice = 27;

  return (
    <div
      className="w-full max-w-[380px] rounded-xl bg-white p-8 shadow-xl"
      style={{ borderRadius: "12px" }}
    >
      {/* Header */}
      <div className="flex flex-col items-center gap-1 mb-6">
        <Calculator className="h-5 w-5" style={{ color: "#2BC0B4" }} />
        <span
          className="text-xs font-semibold tracking-[0.15em] uppercase"
          style={{ color: "#999999" }}
        >
          {t("محاسبه قیمت", "Price Calculator")}
        </span>
      </div>

      {/* Dropdowns row */}
      <div className="grid grid-cols-2 gap-3 mb-4">
        <div>
          <label className="block text-xs font-medium mb-1" style={{ color: "#777" }}>
            {t("نوع کار", "Type of work")}
          </label>
          <div className="relative">
            <select
              value={workType}
              onChange={(e) => setWorkType(e.target.value)}
              className="w-full appearance-none rounded-lg border bg-white px-3 py-2.5 text-sm pr-8 focus:outline-none focus:ring-2"
              style={{ borderColor: "#E0E0E0", color: "#333" }}
            >
              <option value="rewriting">{t("بازنویسی", "Rewriting")}</option>
              <option value="writing">{t("نگارش", "Writing")}</option>
              <option value="editing">{t("ویرایش", "Editing")}</option>
            </select>
            <ChevronDown
              className="absolute right-2 top-1/2 -translate-y-1/2 h-4 w-4 pointer-events-none"
              style={{ color: "#999" }}
            />
          </div>
        </div>
        <div>
          <label className="block text-xs font-medium mb-1" style={{ color: "#777" }}>
            {t("مقطع تحصیلی", "Academic level")}
          </label>
          <div className="relative">
            <select
              value={level}
              onChange={(e) => setLevel(e.target.value)}
              className="w-full appearance-none rounded-lg border bg-white px-3 py-2.5 text-sm pr-8 focus:outline-none focus:ring-2"
              style={{ borderColor: "#E0E0E0", color: "#333" }}
            >
              <option value="highschool">{t("دبیرستان", "High School")}</option>
              <option value="bachelor">{t("لیسانس", "Bachelor")}</option>
              <option value="master">{t("ارشد", "Master")}</option>
              <option value="phd">{t("دکتری", "PhD")}</option>
            </select>
            <ChevronDown
              className="absolute right-2 top-1/2 -translate-y-1/2 h-4 w-4 pointer-events-none"
              style={{ color: "#999" }}
            />
          </div>
        </div>
      </div>

      {/* Pages & Urgency row */}
      <div className="grid grid-cols-2 gap-3 mb-6">
        <div>
          <label className="block text-xs font-medium mb-1" style={{ color: "#777" }}>
            {t("صفحات/کلمات", "Pages/Words")}
          </label>
          <div
            className="flex items-center rounded-lg border"
            style={{ borderColor: "#E0E0E0" }}
          >
            <button
              onClick={() => setPages((p) => Math.max(1, p - 1))}
              className="px-2.5 py-2 hover:bg-gray-50 transition-colors"
              style={{ color: "#999" }}
            >
              <Minus className="h-3.5 w-3.5" />
            </button>
            <input
              type="number"
              value={pages}
              onChange={(e) => setPages(Math.max(1, parseInt(e.target.value) || 1))}
              className="w-full text-center text-sm font-medium border-x bg-white py-2 focus:outline-none"
              style={{ borderColor: "#E0E0E0", color: "#333" }}
              min={1}
            />
            <button
              onClick={() => setPages((p) => p + 1)}
              className="px-2.5 py-2 hover:bg-gray-50 transition-colors"
              style={{ color: "#999" }}
            >
              <Plus className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
        <div>
          <label className="block text-xs font-medium mb-1" style={{ color: "#777" }}>
            {t("فوریت", "Urgency")}
          </label>
          <div
            className="flex items-center rounded-lg border"
            style={{ borderColor: "#E0E0E0" }}
          >
            <button
              onClick={() => setUrgencyDays((d) => Math.max(1, d - 1))}
              className="px-2.5 py-2 hover:bg-gray-50 transition-colors"
              style={{ color: "#999" }}
            >
              <Minus className="h-3.5 w-3.5" />
            </button>
            <span
              className="flex-1 text-center text-sm font-medium py-2 border-x bg-white"
              style={{ borderColor: "#E0E0E0", color: "#333" }}
            >
              {urgencyDays} {t("روز", "days")}
            </span>
            <button
              onClick={() => setUrgencyDays((d) => d + 1)}
              className="px-2.5 py-2 hover:bg-gray-50 transition-colors"
              style={{ color: "#999" }}
            >
              <Plus className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Price */}
      <div className="text-center mb-5">
        <span
          className="block text-xs font-semibold tracking-[0.12em] uppercase mb-1"
          style={{ color: "#999" }}
        >
          {t("شروع قیمت از", "Starting at")}
        </span>
        <div className="flex items-start justify-center">
          <span className="text-4xl font-extrabold" style={{ color: "#1a1a2e" }}>
            ${basePrice}
          </span>
          <span
            className="text-lg font-bold relative -top-1"
            style={{ color: "#1a1a2e" }}
          >
            {centsPrice}
          </span>
        </div>
      </div>

      {/* CTA */}
      <button
        className="w-full py-3 rounded-full text-white font-bold text-base transition-all hover:opacity-90 shadow-md"
        style={{ backgroundColor: "#F5A623" }}
        onClick={() =>
          document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
        }
      >
        {t("ادامه →", "Continue →")}
      </button>
    </div>
  );
};

export default PriceCalculator;
