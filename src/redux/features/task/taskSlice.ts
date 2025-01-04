import { RootState } from "@/redux/store";
import { TTaskInitType } from "./../../../types/types";
import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";

interface IinitialState {
  tasks: TTaskInitType[];
  filter: "all" | "heigh" | "medium" | "low";
}
// Create type for task payload
type TDraftTask = Pick<
  TTaskInitType,
  "title" | "description" | "dueDate" | "priority"
>;
const initialState: IinitialState = {
  tasks: [],
  filter: "all",
};

// Create Function for modefied Data for adding Task
const modifyTask = (taskData: TDraftTask): TTaskInitType => {
  return {
    id: nanoid(),
    isCompleted: false,
    ...taskData,
  };
};
const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<TDraftTask>) => {
      const taskData = modifyTask(action.payload);
      state.tasks.push(taskData);
    },
    updateTask: (state, action: PayloadAction<string>) => {
      console.log(action.payload);
      state.tasks.forEach((task) =>
        task.id === action.payload
          ? (task.isCompleted = !task.isCompleted)
          : task
      );
    },
  },
});

// Export Selector for tasks
export const taskSelector = (state: RootState) => {
  return state.todo.tasks;
};

//  Export Selector for Filter
export const filterSelector = (state: RootState) => {
  return state.todo.filter;
};

// Export Action
export const { addTask, updateTask } = taskSlice.actions;

export default taskSlice.reducer;
