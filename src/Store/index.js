// App wide state management store

import { configureStore } from "@reduxjs/toolkit";
import tasksSlice from "./TasksStore";

const reduxStore = configureStore({
    reducer:{
        tasks : tasksSlice.reducer
    }
});
export default reduxStore;
