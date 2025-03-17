import { TrendLineChart } from "@/components/chart/TrendLineChart";
import { TrendCard } from "@/components/dashboard/TrendCard";

export default function Home() {
  const trendList = [
    {
      title: "Sales",
      type: "sales" as const,
      value: 2.382,
      currencyType: false,
      percentage: -3.65,
    },
    {
      title: "Earnings",
      type: "earnings" as const,
      value: 21300,
      currencyType: true,
      percentage: 6.85,
    },
    {
      title: "Visitors",
      type: "visitors" as const,
      value: 14212,
      currencyType: false,
      percentage: 5.25,
    },
    {
      title: "Orders",
      type: "orders" as const,
      value: 64,
      currencyType: false,
      percentage: -2.25,
    },
  ];

  return (
    <>
      <h1 className="pb-4 font-medium">Analytics Dashboard</h1>

      <main className="grid h-screen grid-cols-12 gap-4">
        {/* Row 1-2 */}
        <div className="col-span-12 grid grid-cols-2 gap-4 lg:col-span-4">
          {trendList.map((items, index) => (
            <TrendCard
              key={index}
              title={items.title}
              type={items.type}
              value={items.value}
              currencyType={items.currencyType}
              percentage={items.percentage}
              className="col-span-2 min-w-[100px] md:col-span-1"
            />
          ))}
        </div>

        <div className="col-span-12 rounded-xl bg-white p-1 lg:col-span-8">
          <TrendLineChart />
        </div>

        <div className="col-span-12 row-span-3 flex items-center justify-center rounded-2xl bg-pink-500 md:col-span-3">
          F
        </div>
        <div className="col-span-12 row-span-3 flex items-center justify-center rounded-2xl bg-gray-500 md:col-span-6">
          G
        </div>
        <div className="col-span-12 row-span-3 flex items-center justify-center rounded-2xl bg-orange-500 md:col-span-3">
          H
        </div>

        <div className="col-span-12 row-span-3 flex items-center justify-center rounded-2xl bg-cyan-500 md:col-span-9">
          I
        </div>
        <div className="col-span-12 row-span-3 flex items-center justify-center rounded-2xl bg-teal-500 md:col-span-3">
          J
        </div>
      </main>
    </>
  );
}
