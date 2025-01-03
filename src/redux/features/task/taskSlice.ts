import { RootState } from "@/redux/store";
import { TTaskInitType } from "./../../../types/types";
import { createSlice } from "@reduxjs/toolkit";
interface IinitialState {
  tasks: TTaskInitType[];
  filter: "all" | "heigh" | "medium" | "low";
}
const initialState: IinitialState = {
  tasks: [
    {
      id: "2dsf34",
      title: "Init the Front end",
      description: "Create Home page and Routing",
      dueDate: "11-2-2025",
      isCompleted: false,
      priority: "High",
    },
    {
      id: "2dsf3884",
      title: "Init Typescript",
      description: "Create Home page and Routing Using Typescript",
      dueDate: "11-2-2025",
      isCompleted: false,
      priority: "Medium",
    },
  ],
  filter: "all",
};
const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {},
});

// Export Selector for tasks
export const taskSelector = (state: RootState) => {
  return state.todo.tasks;
};

//  Export Selector for Filter
export const filterSelector = (state: RootState) => {
  return state.todo.filter;
};

export default taskSlice.reducer;
