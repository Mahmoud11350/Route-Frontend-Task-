"use server";
import prisma from "@/db/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const createNewUser = async (formData: FormData) => {

  const user = await prisma.customer.create({
    data: {
      name: formData.get("userName") as string,
    },
  });
  revalidatePath("/", "layout");
  redirect("/");
};

export const createNewTransaction = async (id: string, formData: FormData) => {
  const date = formData.get("date") as any
  const amount = formData.get("amount");

  if (Number(amount) === 0 || date == undefined || date == null) return;

    await prisma.transaction.create({
    data: {
      amount: Number(amount),
      customerId: id,
      date: new Date(date)  ,
    },
  });
 revalidatePath("/", "layout");
 return redirect("/");
};
