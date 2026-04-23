"use client";

import { Switch } from "@/components/ui/switch";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";

export default function LanguageToggle() {
  const locale = useLocale();

  const router = useRouter();
  const pathname = usePathname();
  const isEnglish = locale === "en";

  const handleToggle = (checked: boolean) => {
    const nextLocale = checked ? "en" : "ar";
    router.replace(pathname, { locale: nextLocale });
  };

  return (
    <div>
      <Switch
        size="lg" // استخدمنا المقاس الجديد
        checked={isEnglish}
        onCheckedChange={handleToggle}
        // ممكن تغير لون الـ bg لدرجة الأزرق/الموف بتاعتك لو مش عاجبك لون البرايمري
        className="data-[state=checked]:bg-indigo-500 data-[state=unchecked]:bg-indigo-400"
      >
        {/* النص هيتحط جوه الـ children هنا وهيتحرك أوتوماتيك يمين وشمال */}
        <span
          className={`absolute text-[11px] font-bold text-white transition-all duration-300 pointer-events-none z-0
          ${isEnglish ? "left-2" : "right-2"}
        `}
        >
          {isEnglish ? "EN" : "AR"}
        </span>
      </Switch>
    </div>
  );
}
