import { AddTaskModal } from "@/components/customComponents/TaskCard/task/AddTaskModal";
import TaskCard from "@/components/customComponents/TaskCard/TaskCard";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { taskFilter, taskSelector } from "@/redux/features/task/taskSlice";
import { useAppDispatch, useAppSelectopr } from "@/redux/hooks";

const Tasks = () => {
  const tasks = useAppSelectopr(taskSelector);
  const dispatch = useAppDispatch();
  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-3xl">Task</h2>
        <Tabs defaultValue="all">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger
              onClick={() => dispatch(taskFilter("all"))}
              value="all"
            >
              All
            </TabsTrigger>
            <TabsTrigger
              onClick={() => dispatch(taskFilter("High"))}
              value="High"
            >
              High
            </TabsTrigger>
            <TabsTrigger
              onClick={() => dispatch(taskFilter("Medium"))}
              value="Medium"
            >
              Medium
            </TabsTrigger>
            <TabsTrigger
              onClick={() => dispatch(taskFilter("Low"))}
              value="Low"
            >
              Low
            </TabsTrigger>
          </TabsList>
        </Tabs>
        <AddTaskModal />
      </div>
      <div className="space-y-2">
        {tasks?.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default Tasks;
