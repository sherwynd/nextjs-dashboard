import { twMerge } from "tailwind-merge";

import { Badge } from "../ui/badge";
import { Truck, DollarSign, Users, ShoppingCart } from "lucide-react"; // Example icon
import { JSX } from "react";

interface TrendCardProps {
  title: string;
  value: number;
  currencyType?: boolean;
  percentage: number;
  type: "sales" | "earnings" | "visitors" | "orders";
  className?: string;
}

export function TrendCard({
  title,
  value,
  currencyType,
  percentage,
  type,
  className,
}: TrendCardProps) {
  const formattedValue = currencyType
    ? `$${value.toLocaleString()}`
    : value.toLocaleString();

  const formattedPercentage = `${percentage.toFixed(2)}%`;

  let badgeColour = "bg-gray-200 text-gray-700";

  if (percentage < 0) {
    if (type == "orders") {
      badgeColour = "bg-red-200 text-red-700";
    } else if (type == "sales") {
      badgeColour = "bg-blue-200 text-blue-700";
    } else {
      badgeColour = "bg-green-200 text-green-700";
    }
  }

  const iconMapping: Record<string, JSX.Element> = {
    sales: <Truck className="h-6 w-6 text-blue-500" />,
    earnings: <DollarSign className="h-6 w-6 text-blue-500" />,
    visitors: <Users className="h-6 w-6 text-blue-500" />,
    orders: <ShoppingCart className="h-6 w-6 text-blue-500" />,
  };

  return (
    <div
      className={twMerge(
        "flex h-full flex-col rounded-xl bg-white p-4 shadow-lg",
        className,
      )}
    >
      {/* Top Section: Title and Icon */}
      <div className="card-title-part flex items-start justify-between">
        <h5 className="card-title mb-2 font-bold text-gray-400">{title}</h5>
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
          {iconMapping[type]}
        </div>
      </div>

      {/* Middle Section: Value */}
      <h1 className="card-value my-1 text-3xl">{formattedValue}</h1>

      {/* Bottom Section: Percentage */}
      <div className="card-percentage-part mt-auto flex items-center gap-1 text-gray-400">
        <Badge className={`card-percentage ${badgeColour}`}>
          {formattedPercentage}
        </Badge>
        <span className="pl-1 text-[13px] text-gray-500">Since Last week</span>
      </div>
    </div>
  );
}
