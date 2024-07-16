import AreaChartComponent from "@/components/AreaCharts";
import BarChartComponent from "@/components/BarCharts";
import Charts from "@/components/Charts";
import TransactionTable from "@/components/TransactionTable";
import { Button } from "@/components/ui/button";
import prisma from "@/db/prisma";
import { ChartsData } from "@/lib/Types";
import moment from "moment";
import Link from "next/link";

export default async function Customer({ params }: { params: { id: string } }) {
  const customer = await prisma.customer.findUnique({
    where: {
      id: params.id,
    },
    include: {
      transaction: true,
    },
  });

  const chartData = customer?.transaction?.map((item) => {
    return {
      amount: item.amount,
      date: moment(item.date).format("Do MMMM YYYY"),
    };
  });

  if (customer?.transaction.length === 0) {
    return (
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  text-center ">
        <h3 className="text-xl font-bold ">No Transaction Completed Yet </h3>
        <Link href={`/customer/${customer.id}/transactions/new`}>
          <Button className="mt-4">Add Your First Transaction</Button>
        </Link>
      </div>
    );
  }

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
