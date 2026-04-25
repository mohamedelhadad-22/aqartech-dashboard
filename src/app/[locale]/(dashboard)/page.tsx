"use client";

import { useTranslations } from "next-intl";
import StatCard from "@/features/overview/components/StatCard";
import LeasingActivityChart from "@/features/overview/components/LeasingActivityChart";
import OccupancyRateChart from "@/features/overview/components/OccupancyRateChart";
import { Download } from "lucide-react";
import SalesPerformanceTable from "@/features/overview/components/SalesPerformanceTable";

export default function DashboardOverviewPage() {
  const mockCallData = [
    { name: "Day 1", actual: 100, expected: 120 },
    { name: "Day 2", actual: 200, expected: 150 },
    { name: "Day 3", actual: 150, expected: 180 },
    { name: "Day 4", actual: 300, expected: 200 },
    { name: "Day 5", actual: 409, expected: 255 },
  ];

  const mockSaleData = [
    { name: "Day 1", actual: 40, expected: 30 },
    { name: "Day 2", actual: 55, expected: 45 },
    { name: "Day 3", actual: 45, expected: 50 },
    { name: "Day 4", actual: 70, expected: 60 },
    { name: "Day 5", actual: 826, expected: 44 },
  ];

  const mockRentData = [
    { name: "Day 1", actual: 1000, expected: 900 },
    { name: "Day 2", actual: 1200, expected: 1100 },
    { name: "Day 3", actual: 900, expected: 1300 },
    { name: "Day 4", actual: 1500, expected: 1400 },
    { name: "Day 5", actual: 247971, expected: 44 },
  ];
  const t = useTranslations("overview");

  return (
    <div className="flex flex-col gap-6">
      <section className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-foreground">{t("overview")}</h1>

        {/* زرار التصميم البنفسجي */}
        <button className="flex items-center gap-2 rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-indigo-700">
          <Download className="h-4 w-4" />
          Export All
        </button>
      </section>
      <section>
        <h2 className="mb-4 text-lg font-semibold text-foreground">
          {t("rentalStats")}
        </h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <StatCard
            title={t("averageCalls")}
            value="409"
            subtitle={t("growthSubtitle", { percentage: "50" })}
            chartData={mockCallData}
          />

          <StatCard
            title={t("propertiesForSale")}
            value="826"
            subtitle={t("growthSubtitle", { percentage: "50" })}
            chartData={mockSaleData}
          />

          <StatCard
            title={t("propertiesForRent")}
            value="247,971"
            subtitle={t("growthSubtitle", { percentage: "50" })}
            chartData={mockRentData}
          />
        </div>
      </section>

      <section className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <LeasingActivityChart title={t("leasingActivity")} />
        </div>

        <div className="lg:col-span-1">
          <OccupancyRateChart title={t("occupancyRate")} />
        </div>
      </section>

      <section>
        <h2 className="mb-4 text-lg font-semibold text-foreground">
          {t("salesPerformance")}
        </h2>

        <SalesPerformanceTable />
      </section>
    </div>
  );
}
