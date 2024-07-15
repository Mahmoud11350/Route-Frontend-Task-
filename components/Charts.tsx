"use client";
import { useState } from "react";
import AreaChartComponent from "./AreaCharts";
import BarChartComponent from "./BarCharts";
import { Button } from "./ui/button";
import { type ChartsData } from "@/lib/Types";

const Charts = ({ chartData }: { chartData: ChartsData[] }) => {
  const [areaCharts, setAreaCharts] = useState(true);
  return (
    <section className="text-center">
      <Button onClick={() => setAreaCharts(!areaCharts)} className="mt-4">
        {areaCharts ? "Display Bar Chart" : "Display Area Chart"}
      </Button>
      {areaCharts ? (
        <AreaChartComponent data={chartData} />
      ) : (
        <BarChartComponent data={chartData} />
      )}
    </section>
  );
};
export default Charts;
