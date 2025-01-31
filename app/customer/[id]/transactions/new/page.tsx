'use server'
import ButtonSubmit from "@/components/ButtonSubmit";
import { DatePickerDemo } from "@/components/DatePicker";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { createNewTransaction } from "@/lib/actions";

const NewTransaction = ({ params }: { params: { id: string } }) => {
  return (
    <form
      className="w-1/4 space-y-6 mx-auto absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-xl p-4"
      method="post"
      action={createNewTransaction.bind(null, params.id)}
    >
      <Label>Transaction Amont</Label>
      <Input name="amount" type="number" />
      <DatePickerDemo  />
      <ButtonSubmit type="Add Transaction"/>
    </form>
  );
};
export default NewTransaction;
