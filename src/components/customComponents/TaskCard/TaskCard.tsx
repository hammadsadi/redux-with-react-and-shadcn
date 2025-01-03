import { FaTrashAlt } from "react-icons/fa";
import { TTaskInitType } from "@/types/types";
import { cn } from "@/lib/utils";
import { Checkbox } from "@/components/ui/checkbox";

interface ITask {
  task: TTaskInitType;
}

const TaskCard = ({ task }: ITask) => {
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
          <h2>{task?.title}</h2>
        </div>
        {/* Status */}
        <div className="flex items-center gap-1">
          <FaTrashAlt className="text-rose-700 cursor-pointer" />
          <Checkbox />
        </div>
      </div>
      <p>{task?.description}</p>
    </div>
  );
};

export default TaskCard;
