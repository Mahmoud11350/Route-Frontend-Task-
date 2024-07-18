
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

import Link from "next/link";

const DataTable = async () => {
  const customers = await prisma.customer.findMany({
    include: {
      transaction: true,
    },
  });

  return (
    <section className="wrapper ">
      <div className="bg-white rounded-lg">
        <Table>
          <TableCaption>A list of recent transactions .</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[200px]">Customer ID </TableHead>
              <TableHead>Name </TableHead>
              <TableHead>Number OF Transaction</TableHead>
              <TableHead className="text-right">Total Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {customers.map((customer) => {
              return (
                <TableRow key={customer.id}>
                  <TableCell className="font-medium ">
                    <Link href={`/customer/${customer.id}`} className="block">
                      {customer.id}
                    </Link>
                  </TableCell>
                  <TableCell>
                    {" "}
                    <Link href={`/customer/${customer.id}`} className="block">
                      {customer.name}
                    </Link>
                  </TableCell>
                  <TableCell>
                    {" "}
                    <Link href={`/customer/${customer.id}`} className="block">
                      {customer.transaction.length}
                    </Link>
                  </TableCell>
                  <TableCell className="text-right">
                    <Link href={`/customer/${customer.id}`} className="block">
                      {customer.transaction.length > 0
                        ? customer.transaction
                            .map((item) => item.amount)
                            .reduce((acc, current) => acc + current)
                        : "0"}
                    </Link>
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

export default DataTable;
