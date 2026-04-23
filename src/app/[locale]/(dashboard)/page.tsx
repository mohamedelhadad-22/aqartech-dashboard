import { useTranslations } from "next-intl";

export default function DashboardOverviewPage() {
  const t = useTranslations("HomePage");

  return (
    <div className="flex flex-col gap-6">
      {/* 1. رأس الصفحة (Overview & General KPIs) */}
      <section className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <h1 className="text-2xl font-bold text-foreground">
            {t("overview")}
          </h1>
          {/* هنا هيتحط زرار الـ Dropdown بتاع General KPIs */}
        </div>
        {/* هنا هيتحط زرار Export All */}
      </section>

      {/* 2. قسم الإحصائيات (Rental Stats) */}
      <section>
        <h2 className="text-lg font-semibold mb-4 text-foreground">
          Rental Stats
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* هنا هنرص الـ StatCards بتاعتنا */}
          {/* <StatCard title="Average Calls Made" value="409" ... /> */}
          {/* <StatCard title="Properties for Sales" value="826" ... /> */}
          {/* <StatCard title="Properties for Rent" value="247,971" ... /> */}
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
