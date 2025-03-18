import { CryptoChart } from "@/components/chart/CryptoChart";
import { TrendLineChart } from "@/components/chart/TrendLineChart";
import { TrendCard } from "@/components/dashboard/TrendCard";
import { analyticColumns } from "@/components/dataTable/analytic/AnalyticColumns";
import { DataTable } from "@/components/dataTable/DataTable";

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

  type Crypto = {
    rank: number;
    name: string;
    symbol: string;
    price: number;
  };

  const cryptoData: Crypto[] = [
    { rank: 1, name: "Bitcoin", symbol: "BTC", price: 83343.48 },
    { rank: 2, name: "Ethereum", symbol: "ETH", price: 1898.66 },
    { rank: 3, name: "Tether USDt", symbol: "USDT", price: 0.9998 },
    { rank: 4, name: "XRP", symbol: "XRP", price: 2.33 },
    { rank: 5, name: "BNB", symbol: "BNB", price: 628.75 },
    { rank: 6, name: "Solana", symbol: "SOL", price: 128.71 },
    { rank: 7, name: "USDC", symbol: "USDC", price: 1.0 },
    { rank: 8, name: "Dogecoin", symbol: "DOGE", price: 0.1722 },
    { rank: 9, name: "Cardano", symbol: "ADA", price: 0.7197 },
    { rank: 10, name: "TRON", symbol: "TRX", price: 0.2127 },
    { rank: 11, name: "Pi", symbol: "PI", price: 1.39 },
  ];

  return (
    <>
      <h1 className="pb-4 font-medium">Analytics Dashboard</h1>

      <main className="grid grid-cols-12 gap-4">
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

        <div className="col-span-12 row-span-3 rounded-xl bg-white">
          <DataTable
            columns={analyticColumns}
            data={cryptoData}
            rowSelected={false}
          />
        </div>
        <div className="col-span-12 row-span-3 rounded-xl bg-white">
          <CryptoChart />
        </div>
      </main>
    </>
  );
}
