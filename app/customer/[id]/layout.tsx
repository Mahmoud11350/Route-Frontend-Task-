import { Button } from "@/components/ui/button";
import prisma from "@/db/prisma";
import Link from "next/link";

const CustomerLayout = async ({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { id: String };
}) => {
  const customer = await prisma.customer.findUnique({
    where: {
      id: Number(params.id),
    },
  });
  return (
    <>
      <section className="bg-white my-4">
        <div className="wrapper flex items-center justify-between">
          <h2 className="text-lg font-bold uppercase text-mainColor ">
            {customer?.name}
          </h2>
          <Link href={`/customer/${params.id}`}>
            <Button>Add New Transction</Button>
          </Link>
        </div>
      </section>
      {children}
    </>
  );
};
export default CustomerLayout;
