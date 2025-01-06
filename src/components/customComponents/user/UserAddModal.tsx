import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { addUser } from "@/redux/features/user/userSlice";
import { useAppDispatch } from "@/redux/hooks";
import { TUserDraft } from "@/types/types";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

export function UserAddModal() {
  const form = useForm();
  const dispatch = useAppDispatch();
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    dispatch(addUser(data as TUserDraft));
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Add New User</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription className="sr-only">
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form className="space-y-3" onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="userName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>User Name</FormLabel>
                  <FormControl>
                    <Input {...field} value={field.value || ""} />
                  </FormControl>
                </FormItem>
              )}
            />

            <DialogFooter>
              <Button type="submit">Add User</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
