import { RootState } from "@/redux/store";
import { TTaskInitType } from "./../../../types/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

interface IinitialState {
  tasks: TTaskInitType[];
  filter: "all" | "heigh" | "medium" | "low";
}
const initialState: IinitialState = {
  tasks: [],
  filter: "all",
};
const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<TTaskInitType>) => {
      const id = uuidv4();
      const taskData = {
        ...action.payload,
        id,
        isCompleted: false,
      };
      state.tasks.push(taskData);
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
export const { addTask } = taskSlice.actions;

export default taskSlice.reducer;
