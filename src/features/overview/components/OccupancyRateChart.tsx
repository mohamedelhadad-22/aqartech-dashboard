"use client";

import { useTranslations } from "next-intl";
import { Cell, Label, Pie, PieChart } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export default function OccupancyRateChart({ title }: { title: string }) {
  const t = useTranslations("overview");

  const chartData = [
    { status: t("occupied"), value: 85, color: "#6366f1" },
    { status: t("vacant"), value: 15, color: "#e0e7ff" },
  ];

  const chartConfig = {
    value: {
      label: "Percentage",
    },
    occupied: {
      label: t("occupied"),
      color: "#6366f1",
    },
    vacant: {
      label: t("vacant"),
      color: "#e0e7ff",
    },
  } satisfies ChartConfig;

  return (
    <div className="flex h-full flex-col gap-4 rounded-xl border border-border bg-card p-6 shadow-sm">
      <h3 className="text-lg font-semibold text-foreground">{title}</h3>

      <div dir="ltr" className="flex flex-1 items-center justify-center">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square w-full max-w-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="value"
              nameKey="status"
              innerRadius={70}
              outerRadius={90}
              strokeWidth={4}
              stroke="var(--theme-background)"
            >
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}

              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-4xl font-bold"
                        >
                          85%
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground text-sm"
                        >
                          {t("occupied")}
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </div>
    </div>
  );
}
