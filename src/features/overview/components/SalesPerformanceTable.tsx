"use client";

import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";

type DataType = "number" | "currency" | "percentage";

const tableData = [
  {
    id: "unitSold",
    type: "number" as DataType,
    values: [56, 56, 25, 30, 36, 42, 44, 46, 46],
  },
  {
    id: "avgListPrice",
    type: "currency" as DataType,
    values: [
      358813, 358813, 275000, 283250, 291748, 300500, 309515, 328364, 328364,
    ],
  },
  {
    id: "avgSalesPrice",
    type: "currency" as DataType,
    highlight: true,
    values: [
      345320, 345320, 259875, 264875, 272000, 290000, 295605, 310000, 310000,
    ],
  },
  {
    id: "listToSales",
    type: "percentage" as DataType,
    values: [-3.8, -3.8, -5.5, -6.5, -6.5, -3.5, -4.5, -2.8, -2.8],
  },
];

const months = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep"];

export default function SalesPerformanceTable() {
  const t = useTranslations("overview.table");

  const formatValue = (value: number, type: DataType) => {
    if (type === "percentage") return `${value}%`;

    const formattedNum = new Intl.NumberFormat("en-US").format(value);
    return type === "currency" ? `${formattedNum} ${t("sar")}` : formattedNum;
  };

  return (
    <div className="w-full overflow-hidden rounded-xl border border-border bg-card shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          {/* Header */}
          <thead className="bg-indigo-600 text-white">
            <tr>
              <th className="whitespace-nowrap px-6 py-4 font-semibold text-start border-e border-indigo-500/50">
                {t("propertiesPurchases")}
              </th>
              {months.map((month, index) => (
                <th
                  key={month}
                  className={cn(
                    "whitespace-nowrap px-4 py-4 font-semibold text-center",

                    index !== months.length - 1 &&
                      "border-e border-indigo-500/50",
                  )}
                >
                  {t(`months.${month}`)}
                </th>
              ))}
            </tr>
          </thead>

          {/* Table Content */}
          <tbody className="text-foreground">
            {tableData.map((row, rowIndex) => (
              <tr
                key={row.id}
                className={cn(
                  "border-b border-border last:border-0 transition-colors hover:bg-muted/50",
                  // AVG Sales Price
                  row.highlight && "bg-slate-100 dark:bg-slate-800/50",
                )}
              >
                {/* Row Name */}
                <td className="whitespace-nowrap px-6 py-4 font-bold text-start">
                  {t(row.id)}
                </td>

                {/* Months Numbers*/}
                {row.values.map((val, idx) => (
                  <td
                    key={idx}
                    className="whitespace-nowrap px-4 py-4 text-center font-medium text-muted-foreground"
                  >
                    {formatValue(val, row.type)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
