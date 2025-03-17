"use client";

import { useState } from "react";
import { Tooltip, XAxis, YAxis, AreaChart, Area } from "recharts";

import { ChartConfig, ChartContainer } from "@/components/ui/chart";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type SalesDataType = Record<
  string,
  { year: string; month: string; sales: number }[]
>;

const salesData: SalesDataType = {
  "2023": [
    { year: "2023", month: "Aug", sales: 2448 },
    { year: "2023", month: "Sep", sales: 2805 },
    { year: "2023", month: "Oct", sales: 3438 },
    { year: "2023", month: "Nov", sales: 2917 },
    { year: "2023", month: "Dec", sales: 3327 },
  ],
  "2024": [
    { year: "2024", month: "Jan", sales: 2115 },
    { year: "2024", month: "Feb", sales: 1562 },
    { year: "2024", month: "Mar", sales: 1584 },
    { year: "2024", month: "Apr", sales: 1892 },
    { year: "2024", month: "May", sales: 1587 },
    { year: "2024", month: "Jun", sales: 1923 },
    { year: "2024", month: "Jul", sales: 2566 },
    { year: "2024", month: "Aug", sales: 2448 },
    { year: "2024", month: "Sep", sales: 2805 },
    { year: "2024", month: "Oct", sales: 3438 },
    { year: "2024", month: "Nov", sales: 2917 },
    { year: "2024", month: "Dec", sales: 3327 },
  ],
  "2025": [
    { year: "2025", month: "Jan", sales: 2115 },
    { year: "2025", month: "Feb", sales: 1562 },
  ],
};

const chartConfig = {
  sales: {
    label: "Sales",
    color: "#2563eb",
  },
} satisfies ChartConfig;

export function TrendLineChart() {
  const [selectedYear, setSelectedYear] = useState<string>("2025");

  return (
    <div className="flex flex-col">
      <div className="mb-2 flex justify-between px-4 pt-2">
        <h5 className="font-bold text-gray-400">Recent Movement</h5>
        <Select onValueChange={(year) => setSelectedYear(year)}>
          <SelectTrigger>
            <SelectValue placeholder="Select a Year" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {Object.keys(salesData).map((year) => (
                <SelectItem key={year} value={year}>
                  {year}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <ChartContainer
        config={chartConfig}
        className="flex h-[280px] w-full items-center"
      >
        <AreaChart
          data={salesData[selectedYear]}
          margin={{ top: 20, right: 30, bottom: 5 }}
        >
          <defs>
            <linearGradient id="trendColor" x1="0" y1="0" x2="0" y2="1">
              <stop offset="1%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="100%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="sales"
            stroke="#8884d8"
            strokeWidth={2}
            fillOpacity={1}
            fill="url(#trendColor)"
          />
        </AreaChart>
      </ChartContainer>
    </div>
  );
}
