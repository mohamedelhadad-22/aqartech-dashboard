"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { useTranslations } from "next-intl";

export default function LeasingActivityChart({ title }: { title: string }) {
  const t = useTranslations("overview");

  const chartData = [
    { day: "Overdue", value: 10 },
    { day: "Today", value: 25 },
    { day: "Wed", value: 45 },
    { day: "Thu", value: 65 },
    { day: "Fri", value: 35 },
    { day: "Sat", value: 15 },
    { day: "Sun", value: 50 },
  ];

  return (
    <div className="flex flex-col gap-4 rounded-xl border border-border bg-card p-6 shadow-sm">
      <h3 className="text-lg font-semibold text-foreground">{title}</h3>

      {/* الـ Container بتاع الشارت (ltr عشان الأعمدة تترتب صح) */}
      <div dir="ltr" className="h-[250px] w-full mt-4">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={chartData}
            margin={{ top: 0, right: 0, left: -20, bottom: 0 }}
            barSize={32} // عرض العمود زي التصميم
          >
            {/* شبكة الخطوط الأفقية المنقطة */}
            <CartesianGrid
              vertical={false}
              strokeDasharray="4 4"
              stroke="#e2e8f0"
            />

            {/* محور السينات (الأيام) */}
            <XAxis
              dataKey="day"
              axisLine={false}
              tickLine={false}
              tickMargin={12}
              fontSize={12}
              tick={{ fill: "#64748b" }}
            />

            {/* محور الصادات (الأرقام) - التصميم خافي الأرقام بس سايب الخطوط */}
            <YAxis axisLine={false} tickLine={false} tick={false} />

            <Tooltip
              cursor={{ fill: "#f1f5f9" }} // لون خفيف لما تقف على العمود
              contentStyle={{
                borderRadius: "8px",
                border: "none",
                boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
              }}
            />

            {/* العمود نفسه (لونه رمادي زي التصميم، وحوافه من فوق دائرية شوية) */}
            <Bar dataKey="value" fill="#94a3b8" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* الـ Legend اللي تحت الشارت (Exit, Transport, Expected) */}
      <div className="flex flex-wrap items-center gap-6 mt-4 text-[11px] font-semibold text-muted-foreground">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-indigo-600 rounded-sm" />
          Exit 1
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-purple-400 rounded-sm" />
          Transport 2
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-orange-400 rounded-sm" />
          Expected Leases 0
        </div>
      </div>
    </div>
  );
}
