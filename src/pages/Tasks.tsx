import TaskCard from "@/components/customComponents/TaskCard/TaskCard";
import { taskSelector } from "@/redux/features/task/taskSlice";
import { useAppSelectopr } from "@/redux/hooks";

const Tasks = () => {
  const tasks = useAppSelectopr(taskSelector);
  console.log(tasks);
  return (
    <div className="max-w-4xl mx-auto">
      <div className="space-y-2">
        {tasks?.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default Tasks;
