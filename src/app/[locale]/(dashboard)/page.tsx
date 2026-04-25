"use client";

import { useTranslations } from "next-intl";
import StatCard from "@/features/overview/components/StatCard";
import { Building2, Home, PhoneCall } from "lucide-react";

export default function DashboardOverviewPage() {
  const t = useTranslations("overview");

  return (
    <div className="flex flex-col gap-6">
      <section className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-foreground">{t("overview")}</h1>
      </section>

      <section>
        <h2 className="mb-4 text-lg font-semibold text-foreground">
          {t("rentalStats")}
        </h2>

        {/* شبكة متجاوبة: كارت واحد في الموبايل، كارتين في التابلت، 3 في الشاشات الكبيرة */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <StatCard
            title={t("averageCalls")}
            value="409"
            trend="up"
            percentage="12%"
            icon={PhoneCall}
          />

          <StatCard
            title={t("propertiesForSale")}
            value="826"
            trend="down"
            percentage="4.3%"
            icon={Home}
          />

          <StatCard
            title={t("propertiesForRent")}
            value="247,971"
            trend="up"
            percentage="21.5%"
            icon={Building2}
          />
        </div>
      </section>

      {/* 3. قسم الرسوم البيانية (Charts) */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          {/* <ChartCard title="Leasing activity next 7 days" /> */}
        </div>
        <div className="lg:col-span-1">
          {/* <ChartCard title="Occupancy Rate" /> */}
        </div>
      </section>

      {/* 4. قسم الجدول (Sales Performance) */}
      <section>
        <h2 className="text-lg font-semibold mb-4 text-foreground">
          Sales Performance
        </h2>
        {/* <DataTable columns={columns} data={data} /> */}
      </section>
    </div>
  );
}
