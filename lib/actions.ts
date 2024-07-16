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

export const createNewTransaction = async (id: String, formData: FormData) => {
  const amount = formData.get("amount");
  if (Number(amount) === 0) return;
  const transaction = await prisma.transaction.create({
    data: {
      amount: Number(amount),
      customerId: id,
      date: new Date(Date.now()),
    },
  });
  revalidatePath("/", "layout");
  redirect("/");
};
