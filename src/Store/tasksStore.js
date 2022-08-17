import { createSlice } from "@reduxjs/toolkit";

// Redux Store slice to manage the Tasks
const tasksSlice = createSlice({
    name:'tasks',
    initialState: {allTasks:[]},
    reducers:{

        // Reducer to fetch all the tasks
        setTasks(state, action){
            for(let key in action.payload){
                state.allTasks.push(action.payload[key])
            }
        },

        // Reducer to add a new task
        addNewTask(state, action){
            console.log(action);
            state.allTasks = [...state.allTasks, action.payload]
            state.allTasks.push(action.payload);
            // window.location.reload();
        }
    }
});

export default tasksSlice;
export const taskActions = tasksSlice.actions;

// Middleware to fetch Tasks
export function getTasks(){
    return dispatch => {
        fetch('https://react-http-bf239-default-rtdb.firebaseio.com/Tasks.json')
        .then(respose => respose.json())
        .then(data => {dispatch(taskActions.setTasks(data))})
    }
}