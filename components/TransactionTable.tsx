import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import prisma from "@/db/prisma";
import moment from "moment";

import Link from "next/link";

const TransactionTable = async ({ id }: { id: string }) => {
  const transactions = await prisma.transaction.findMany({
    where: {
      customerId: id,
    },
    include: {
      customer: true,
    },
  });

  return (
    <section className="wrapper ">
      <h1 className="text-xl font-bold text-center mb-4">All Transactions</h1>
      <div className="bg-white rounded-lg">
        <Table className="">
          <TableCaption>
            A List Of {transactions[0].customer.name} Transactions .
          </TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[200px]">Customer ID </TableHead>
              <TableHead>Date Of Transaction</TableHead>
              <TableHead className="text-right"> Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {transactions.map((transaction) => {
              return (
                <TableRow key={transaction.id}>
                  <TableCell className="font-medium ">
                    {transaction.id}
                  </TableCell>
                  <TableCell>
                    {moment(transaction.date).format("Do MMMM YYYY")}
                  </TableCell>

                  <TableCell className="text-right">
                    {transaction.amount}
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
    </section>
  );
};
export default TransactionTable;
