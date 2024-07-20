'use server'
import DataTable from "@/components/DataTable";
import TotalCards from "@/components/TotalCards";
import { Button } from "@/components/ui/button";
import prisma from "@/db/prisma";
import Link from "next/link";


export default async function Home() {
  const customers = await prisma.customer.findMany();

  if (customers.length === 0) {
    return (
      <div className="mt-6 text-center">
        <h1 className="mb-6">NO User Created Yet</h1>
        <Link href="/user/new">
          <Button>Add First User</Button>
        </Link>
      </div>
    );
  }
  return (
    <>
      <TotalCards />
      <DataTable />
    </>
  );
}
