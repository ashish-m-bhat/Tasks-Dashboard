// App wide state management store

import { configureStore } from "@reduxjs/toolkit";
import tasksSlice from "./tasksStore";
const store = configureStore({
    reducer:{
        tasks : tasksSlice.reducer
    }
});
export default store;
