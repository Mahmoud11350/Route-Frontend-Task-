"use client";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

import { type ChartsData } from "@/lib/Types";
const AreaChartComponent = ({ data }: { data: ChartsData[] }) => {
  return (
    <section className="wrapper">
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis allowDecimals={false} />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="amount"
            stroke="#002BAA"
            fill="#2cb1bc"
          />
        </AreaChart>
      </ResponsiveContainer>
    </section>
  );
};

export default AreaChartComponent;
