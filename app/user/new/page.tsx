import ButtonSubmit from "@/components/ButtonSubmit";
import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { createNewUser } from "@/lib/actions";
const NewUser = () => {
  return (
    <form
      className="w-1/4 space-y-6 mx-auto absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-xl p-4"
      method="post"
      action={createNewUser}
    >
      <Label>User Name</Label>
      <h1>This is your public display name.</h1>
      <Input name="userName" />
      <ButtonSubmit type="Add User" />
    </form>
  );
};

export default NewUser;
