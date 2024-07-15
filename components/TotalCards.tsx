import prisma from "@/db/prisma";
import { CiDollar } from "react-icons/ci";
import { FaUsers } from "react-icons/fa";
import { GrTransaction } from "react-icons/gr";

const TotalCards = async () => {
  const customers = await prisma.customer.count();
  const transactionsCount = await prisma.transaction.count();
  const transaction = await prisma.transaction.findMany();
  const totalAmount = await prisma.transaction.aggregate({
    _sum: {
      amount: true,
    },
  });
  console.log(totalAmount);
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-4 wrapper">
      <div className="bg-white p-4 rounded-lg ">
        <div className="flex justify-center mb-2">
          <FaUsers size={24} />
        </div>
        <div className="flex items-center justify-between">
          <h4>Total Customers </h4>
          <h4>{customers}</h4>
        </div>
      </div>
      <div className="bg-white p-4 rounded-lg">
        <div className="flex justify-center mb-2">
          <GrTransaction size={24} />
        </div>

        <div className="flex items-center justify-between">
          <h4>Total Tramsactions </h4>
          <h4>{transactionsCount}</h4>
        </div>
      </div>
      <div className="bg-white p-4 rounded-lg">
        <div className="flex justify-center mb-2">
          <CiDollar size={24} />
        </div>

        <div className="flex items-center justify-between">
          <h4>Total Amount </h4>
          <h4>$ {totalAmount._sum.amount}</h4>
        </div>
      </div>
    </section>
  );
};
export default TotalCards;
