import { RootState } from "@/redux/store";
import { TTaskInitType } from "./../../../types/types";
import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";
import { deleteUser } from "../user/userSlice";

interface IinitialState {
  tasks: TTaskInitType[];
  filter: "all" | "High" | "Medium" | "Low";
}
// Create type for task payload
type TDraftTask = Pick<
  TTaskInitType,
  "title" | "description" | "dueDate" | "priority" | "assignTo"
>;
const initialState: IinitialState = {
  tasks: [],
  filter: "all",
};

// Create Function for modefied Data for adding Task
const modifyTask = (taskData: TDraftTask): TTaskInitType => {
  return {
    ...taskData,
    id: nanoid(),
    isCompleted: false,
    assignTo: taskData.assignTo ? taskData.assignTo : null,
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
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    taskFilter: (
      state,
      action: PayloadAction<"all" | "High" | "Low" | "Medium">
    ) => {
      state.filter = action.payload;
    },
  },
  // Extra Reducer for Dependance Actions
  extraReducers: (builder) => {
    builder.addCase(deleteUser, (state, action) => {
      state.tasks.forEach((task) =>
        task.assignTo === action.payload ? (task.assignTo = null) : task
      );
    });
  },
});

// Export Selector for tasks
export const taskSelector = (state: RootState) => {
  const filter = state.todo.filter;
  if (filter === "High") {
    return state.todo.tasks.filter((task) => task.priority === "High");
  } else if (filter === "Medium") {
    return state.todo.tasks.filter((task) => task.priority === "Medium");
  } else if (filter === "Low") {
    return state.todo.tasks.filter((task) => task.priority === "Low");
  } else {
    return state.todo.tasks;
  }
};

//  Export Selector for Filter
export const filterSelector = (state: RootState) => {
  return state.todo.filter;
};

// Export Action
export const { addTask, updateTask, deleteTask, taskFilter } =
  taskSlice.actions;

export default taskSlice.reducer;
