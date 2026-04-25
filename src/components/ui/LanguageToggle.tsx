"use client";

import { useTransition } from "react";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import Image from "next/image";
import { cn } from "@/lib/utils";

export default function LanguageToggle({ className }: { className?: string }) {
  const locale = useLocale();
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const pathname = usePathname();

  const isEnglish = locale === "en";

  const handleToggle = () => {
    const nextLocale = isEnglish ? "ar" : "en";
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale });
    });
  };

  return (
    <button
      onClick={handleToggle}
      disabled={isPending}
      className={cn(
        "flex w-full items-center gap-2.5 rounded-md px-2 py-2 text-start text-[14px] font-semibold text-white/80 hover:text-white/100 transition-colors cursor-pointer disabled:opacity-50",
        className,
      )}
    >
      <Image
        src="/translate.svg"
        alt="Translate"
        width={18}
        height={18}
        className="shrink-0"
      />

      <span>{isEnglish ? "العربية" : "English"}</span>
    </button>
  );
}
