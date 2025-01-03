import { Button } from "@/components/ui/button"
import { filterSelector, taskSelector } from "@/redux/features/task/taskSlice";
import { useAppSelectopr } from "@/redux/hooks";

const Tasks = () => {
  const tasks = useAppSelectopr(taskSelector);
  const filter = useAppSelectopr(filterSelector);
  console.log(tasks);
  console.log(filter);
  return (
    <div>
      <Button>Increament</Button>
    </div>
  );
};

export default Tasks
