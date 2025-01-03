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
import { useForm } from "react-hook-form";

export function AddTaskModal() {
  const form = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button> New</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add New Task</DialogTitle>
        </DialogHeader>
        <DialogDescription className="sr-only">
          Fill up This form for Add Task
        </DialogDescription>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel />
                  <FormControl>
                    <Input {...field} value={field.value || ""} />
                  </FormControl>
                </FormItem>
              )}
            />
            <DialogFooter>
              <Button type="submit">Create</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
