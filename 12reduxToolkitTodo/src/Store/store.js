import { configureStore } from "@reduxjs/toolkit";
//Because of todoSlice.js has default export so here, TodoReducer=TodoSlice.reducer(Default)
import TodoReducer from "../Reducers/todoSlice"

export const store= configureStore({
    reducer: TodoReducer
}) 