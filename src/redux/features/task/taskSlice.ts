import { TTaskInitType } from "./../../../types/types";
import { createSlice } from "@reduxjs/toolkit";
interface IinitialState {
  task: TTaskInitType[];
}
const initialState: IinitialState = {
  task: [
    {
      id: "2dsf34",
      title: "Init the Front end",
      description: "Create Home page and Routing",
      dueDate: "11-2-2025",
      isCompleted: false,
      priority: "High",
    },
  ],
};
const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {},
});

export default taskSlice.reducer;
