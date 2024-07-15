import AreaChartComponent from "@/components/AreaCharts";
import BarChartComponent from "@/components/BarCharts";
import Charts from "@/components/Charts";
import TransactionTable from "@/components/TransactionTable";
import { Button } from "@/components/ui/button";
import prisma from "@/db/prisma";
import moment from "moment";

export default async function Customer({ params }: { params: { id: Number } }) {
  const customer = await prisma.customer.findUnique({
    where: {
      id: Number(params.id),
    },
    include: {
      transaction: true,
    },
  });

  const chartData = customer?.transaction.map((item) => {
    return {
      amount: item.amount,
      date: moment(item.date).format("Do MMMM YYYY"),
    };
  });

  return (
    <>
      <div className="text-center ">
        <h1 className="text-xl font-bold">Monthly Transactions</h1>
      </div>
      <Charts chartData={chartData} />
      <TransactionTable id={params.id} />
    </>
  );
}
