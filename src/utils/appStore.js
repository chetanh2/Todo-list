import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todoSlice";
const appStore = configureStore({
    reducer:{
        todos: todoReducer
    }
})

export default appStore