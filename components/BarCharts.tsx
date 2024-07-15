"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { type ChartsData } from "@/lib/Types";
const BarChartComponent = ({ data }: { data: ChartsData[] }) => {
  return (
    <section className="wrapper">
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} margin={{ top: 50 }}>
          <CartesianGrid strokeDasharray="3 3 " />
          <XAxis dataKey="date" />
          <YAxis allowDecimals={false} />
          <Tooltip />
          <Bar dataKey="amount" fill="#2cb1bc" barSize={75} />
        </BarChart>
      </ResponsiveContainer>
    </section>
  );
};

export default BarChartComponent;
