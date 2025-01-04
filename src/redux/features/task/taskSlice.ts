import { RootState } from "@/redux/store";
import { TTaskInitType } from "./../../../types/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
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
      state.tasks.push(action.payload);
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
