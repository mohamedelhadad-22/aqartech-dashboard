import { ArrowDownRight, ArrowUpRight, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface StatCardProps {
  title: string;
  value: string | number;
  trend?: "up" | "down" | "neutral";
  percentage?: string;
  icon?: LucideIcon;
  className?: string;
}

export default function StatCard({
  title,
  value,
  trend,
  percentage,
  icon: Icon,
  className,
}: StatCardProps) {
  const isPositive = trend === "up";
  const isNegative = trend === "down";

  return (
    <div
      className={cn(
        "flex flex-col gap-4 rounded-xl border border-border bg-card p-6 shadow-sm transition-all hover:shadow-md",
        className,
      )}
    >
      {/* الجزء العلوي: العنوان والأيقونة */}
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-medium text-muted-foreground">{title}</h3>
        {Icon && (
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-500/10 text-indigo-600">
            <Icon className="h-5 w-5" />
          </div>
        )}
      </div>

      {/* الجزء السفلي: الرقم ونسبة التغيير */}
      <div className="flex items-baseline gap-2">
        <span className="text-3xl font-bold text-foreground">{value}</span>

        {trend && percentage && (
          <span
            className={cn(
              "flex items-center text-sm font-medium",
              isPositive
                ? "text-emerald-600"
                : isNegative
                  ? "text-red-600"
                  : "text-gray-500",
            )}
          >
            {/* استخدام me-1 عشان المسافة تظبط عربي وإنجليزي أوتوماتيك */}
            {isPositive && <ArrowUpRight className="me-1 h-4 w-4" />}
            {isNegative && <ArrowDownRight className="me-1 h-4 w-4" />}
            {percentage}
          </span>
        )}
      </div>
    </div>
  );
}
