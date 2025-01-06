import { TUser, TUserDraft } from "@/types/types";
import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";

// initialState
const initialState: TUser = {
  users: [
    {
      id: "123456e54fdg",
      userName: "Hammad Sadi",
    },
    {
      id: "1234sdrthb56e54fdg",
      userName: "Zakiya Mim",
    },
  ],
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<TUserDraft>) => {
      const userInfo = {
        id: nanoid(),
        ...action.payload,
      };
      console.log(userInfo);
      state.users.push(userInfo);
    },
    deleteUser: (state, action: PayloadAction<string>) => {
      state.users = state.users.filter((user) => user.id !== action.payload);
    },
  },
});

// Export Actions
export const { addUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;
