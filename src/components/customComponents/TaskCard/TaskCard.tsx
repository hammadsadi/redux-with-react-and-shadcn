import { Button } from "@/components/ui/button";
import { FaTrashAlt } from "react-icons/fa";
import { CiSquareCheck } from "react-icons/ci";
import { TTaskInitType } from "@/types/types";

interface ITask {
  task: TTaskInitType;
}

const TaskCard = ({ task }: ITask) => {
  return (
    <div className="border p-3 rounded">
      <div className="flex justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-rose-600 rounded-full"></div>
          <h2>{task?.title}</h2>
        </div>
        {/* Status */}
        <div className="flex gap-1">
          <Button size="sm">
            <FaTrashAlt className="text-rose-700" />
          </Button>
          <Button size="sm">
            <CiSquareCheck className="text-green-700" />
          </Button>
        </div>
      </div>
      <p>{task?.description}</p>
    </div>
  );
};

export default TaskCard;
