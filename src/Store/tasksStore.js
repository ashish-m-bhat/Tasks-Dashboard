import { createSlice } from "@reduxjs/toolkit";

// Redux Store slice to manage the Tasks
const tasksSlice = createSlice({
    name:'tasks',
    initialState: {allTasks:[]},
    reducers:{

        // Reducer to fetch all the tasks
        setTasks(state, action){
            const alltasks = JSON.parse(action.payload);
            for(let key in alltasks){
                state.allTasks.push(alltasks[key])
            }
        },

        // Reducer to add a new task
        addNewTask(state, action){
            // Get the current allTasks and add the new Task
            let allTasks = JSON.parse(localStorage.getItem('allTasks'));
            allTasks = allTasks ? [...allTasks, action.payload]:[action.payload] ;
            localStorage.setItem('allTasks', JSON.stringify(allTasks));

            state.allTasks.push(action.payload);
        }
    }
});

export default tasksSlice;
export const taskActions = tasksSlice.actions;

// Middleware to fetch Tasks
export function getTasks(){
    return dispatch => {
        // fetch('https://react-http-bf239-default-rtdb.firebaseio.com/Tasks.json')
        // .then(respose => respose.json())
        // .then(data => {dispatch(taskActions.setTasks(data))})
        dispatch(taskActions.setTasks(localStorage.getItem('allTasks')));
    }
}