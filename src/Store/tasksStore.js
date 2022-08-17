import { createSlice } from "@reduxjs/toolkit";

// Redux Store slice to manage the Tasks
const tasksSlice = createSlice({
    name:'tasks',
    initialState: {allTasks:[]},
    reducers:{
        setTasks(state, action){
            state.allTasks = action.payload;
        }
    }
});

export default tasksSlice;
export const taskActions = tasksSlice.actions;

export function getTasks(){
    return dispatch => {
        fetch('https://react-http-bf239-default-rtdb.firebaseio.com/Tasks.json')
        .then(respose => respose.json())
        .then(data => {console.log(data); dispatch(taskActions.setTasks(data))})
    }
}

