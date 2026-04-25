"use client";

import { useTranslations } from "next-intl";
import { Line, LineChart, ResponsiveContainer, Tooltip } from "recharts";
import { cn } from "@/lib/utils";

interface StatCardProps {
  title: string;
  value: string | number;
  subtitle: string;
  chartData: { name: string; actual: number; expected: number }[];
  className?: string;
}

export default function StatCard({
  title,
  value,
  subtitle,
  chartData,
  className,
}: StatCardProps) {
  const t = useTranslations("overview");

  return (
    <div
      className={cn(
        "flex items-center justify-between rounded-xl border border-border bg-card p-6 shadow-sm",
        className,
      )}
    >
      {/* الجانب الأيمن (في الإنجليزي) / الأيسر (في العربي): النصوص */}
      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-semibold text-foreground">{title}</h3>
        {/* الرقم باللون البنفسجي المميز زي التصميم */}
        <span className="text-3xl font-bold text-indigo-600">{value}</span>
        <span className="text-xs text-muted-foreground">{subtitle}</span>
      </div>

      {/* الجانب المعاكس: الرسم البياني المصغر (Sparkline) */}
      <div className="flex flex-col items-center justify-end w-[140px] h-[90px]">
        {/* حطينا ltr عشان اتجاه الشارت ميبُظش في العربي */}
        <div dir="ltr" className="h-[65px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={chartData}>
              {/* الخط الأساسي (البنفسجي) */}
              <Line
                type="monotone"
                dataKey="actual"
                stroke="#6366f1"
                strokeWidth={2}
                dot={false}
              />
              {/* الخط المتوقع (البرتقالي) */}
              <Line
                type="monotone"
                dataKey="expected"
                stroke="#f59e0b"
                strokeWidth={2}
                dot={false}
              />
              {/* Tooltip بسيط بيظهر لما تقف بالماوس */}
              <Tooltip
                contentStyle={{
                  borderRadius: "8px",
                  fontSize: "12px",
                  padding: "4px 8px",
                }}
                cursor={{
                  stroke: "#cbd5e1",
                  strokeWidth: 1,
                  strokeDasharray: "3 3",
                }}
                labelStyle={{ display: "none" }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* الـ Legend اللي تحت الرسم البياني زي التصميم */}
        <div className="flex items-center gap-3 mt-2 text-[10px] font-medium text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <div className="h-2 w-2 rounded-[2px] bg-indigo-500" />
            {t("actual")}
          </span>
          <span className="flex items-center gap-1.5">
            <div className="h-2 w-2 rounded-[2px] bg-amber-500" />
            {t("expected")}
          </span>
        </div>
      </div>
    </div>
  );
}
