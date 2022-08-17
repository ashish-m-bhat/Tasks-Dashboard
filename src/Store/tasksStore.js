import { createSlice } from "@reduxjs/toolkit";

// Redux Store slice to manage the Tasks
const tasksSlice = createSlice({
    name:'tasks',
    initialState: {allTasks:[]},
    reducers:{
        setTasks(state, action){
            action.payload.forEach(e => {
                state.allTasks.push({id:e.id, name:e.name, status:e.status})
            });

        }
    }
});

export default tasksSlice;
export const taskActions = tasksSlice.actions;

// Middleware
export function getTasks(){
    return dispatch => {
        fetch('https://react-http-bf239-default-rtdb.firebaseio.com/Tasks.json')
        .then(respose => respose.json())
        .then(data => {dispatch(taskActions.setTasks(data))})
    }
}
