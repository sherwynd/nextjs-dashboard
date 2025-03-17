"use client";

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

const salesChartData = [
  { yesr: "2025", month: "Jan", sales: 2115 },
  { yesr: "2025", month: "Feb", sales: 1562 },
  { yesr: "2025", month: "Mar", sales: 1584 },
  { yesr: "2025", month: "Apr", sales: 1892 },
  { yesr: "2025", month: "May", sales: 1587 },
  { yesr: "2025", month: "Jun", sales: 1923 },
  { yesr: "2025", month: "Jul", sales: 2566 },
  { yesr: "2025", month: "Aug", sales: 2448 },
  { yesr: "2025", month: "Sep", sales: 2805 },
  { yesr: "2025", month: "Oct", sales: 3438 },
  { yesr: "2025", month: "Nov", sales: 2917 },
  { yesr: "2025", month: "Dec", sales: 3327 },
];

const chartConfig = {
  sales: {
    label: "Sales",
    color: "#2563eb",
  },
} satisfies ChartConfig;

export function TrendLineChart() {
  return (
    <div className="flex flex-col">
      <div className="mb-2 flex justify-between px-4 pt-2">
        <span>Recent Movement</span>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Select a Year" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="2021">2021</SelectItem>
              <SelectItem value="2021">2022</SelectItem>
              <SelectItem value="2021">2023</SelectItem>
              <SelectItem value="2021">2024</SelectItem>
              <SelectItem value="2021">2025</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <ChartContainer
        config={chartConfig}
        className="flex h-[280px] w-full items-center"
      >
        <AreaChart
          data={salesChartData}
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
