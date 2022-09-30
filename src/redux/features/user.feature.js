import { createSlice, current } from "@reduxjs/toolkit";

const initialState = [
  { id: 1, title: "user 1", completed: false },
  { id: 2, title: "user 2", completed: false },
  { id: 3, title: "user 3", completed: false },
];
let userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    addUsers: (state, action) => {
      const newUser = {
        id: Date.now(),
        title: action.payload.title,
        completed: false,
      };
      state.push(newUser);
    },
    deleteUsers: (state, action) => {
      return state.filter((user) => user.id !== action.payload);
    },
    // updateSelected: (state, action) => {
    //   const index = state.findIndex((user) => user.id === action.payload.id);
    //   console.log(current(state[index]));
    //   // console.log(data);
    //   // const objCopy = { ...data };
    //   // objCopy.completed = action.payload.completed;
    //   // console.log(objCopy);
    //   // data.completed = action.payload.completed;
    //   // state.map((user) => {
    //   //   if (user.id === action.payload.id) {
    //   //     return {
    //   //       user,
    //   //       completed: action.payload.completed,
    //   //     };
    //   //   }
    //   //   return user;
    //   // });
    //   // console.log(index);
    //   // console.log(!action.payload.completed);
    //   // state[index].completed = action.payload.completed;
    // },
  },
});
export const { addUsers, deleteUsers } = userSlice.actions;
export default userSlice.reducer;
