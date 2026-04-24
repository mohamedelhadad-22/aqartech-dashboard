"use client";

import { useTransition } from "react";
import { Switch } from "@/components/ui/switch";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";

export default function LanguageToggle({ className }: { className?: string }) {
  const locale = useLocale();
  const [isPending, startTransition] = useTransition();

  const router = useRouter();
  const pathname = usePathname();

  const isEnglish = locale === "en";

  const handleToggle = (checked: boolean) => {
    const nextLocale = checked ? "en" : "ar";

    startTransition(() => {
      router.replace(pathname, { locale: nextLocale });
    });
  };

  return (
    <Switch
      size="lg"
      checked={isEnglish}
      onCheckedChange={handleToggle}
      disabled={isPending}
      className={`data-[state=checked]:bg-indigo-500 data-[state=unchecked]:bg-indigo-400 transition-opacity ${
        isPending ? "opacity-50" : "opacity-100"
      } ${className}`}
    >
      <span
        className={`absolute top-1/2 -translate-y-1/2 text-[11px] font-bold text-white transition-all duration-300 pointer-events-none z-0 ${
          isEnglish ? "start-1.5" : "end-2"
        }`}
      >
        {isEnglish ? "EN" : "AR"}
      </span>
    </Switch>
  );
}
