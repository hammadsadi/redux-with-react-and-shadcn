import { FaTrashAlt } from "react-icons/fa";
import { TTaskInitType } from "@/types/types";
import { cn } from "@/lib/utils";
import { Checkbox } from "@/components/ui/checkbox";
import { useAppDispatch } from "@/redux/hooks";
import { deleteTask, updateTask } from "@/redux/features/task/taskSlice";

interface ITask {
  task: TTaskInitType;
}

const TaskCard = ({ task }: ITask) => {
  const dispatch = useAppDispatch();
  const handleUpdateStatus = (id: string) => {
    dispatch(updateTask(id));
  };
  return (
    <div className="border p-3 rounded">
      <div className="flex justify-between mb-4">
        <div className="flex items-center gap-2">
          <div
            className={cn("w-3 h-3 rounded-full", {
              "bg-rose-600": task.priority === "High",
              "bg-green-600": task.priority === "Low",
              "bg-yellow-600": task.priority === "Medium",
            })}
          ></div>
          <h2 className={cn({ "line-through": task.isCompleted })}>
            {task?.title}
          </h2>
        </div>
        {/* Status */}
        <div className="flex items-center gap-1">
          <FaTrashAlt
            onClick={() => dispatch(deleteTask(task.id))}
            className="text-rose-700 cursor-pointer"
          />
          <Checkbox onClick={() => handleUpdateStatus(task.id)} />
        </div>
      </div>
      <p>{task?.description}</p>
    </div>
  );
};

export default TaskCard;
