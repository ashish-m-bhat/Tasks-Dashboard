import { createSlice } from "@reduxjs/toolkit";

// Redux Store slice to manage the Tasks
const tasksSlice = createSlice({
    name:'tasks',
    initialState: {allTasks:[], filteredTasks:[]},
    reducers:{

        // Reducer to fetch all the tasks
        setTasks(state, action){
            const alltasks = JSON.parse(action.payload);
            for(let key in alltasks){
                state.allTasks.push(alltasks[key]);
            }
            state.filteredTasks=[...state.allTasks];
        },

        // Reducer to add a new task
        addNewTask(state, action){
            // Get the current allTasks and add the new Task
            let allTasks = JSON.parse(localStorage.getItem('allTasks'));
            allTasks = allTasks ? [...allTasks, action.payload]:[action.payload] ;
            localStorage.setItem('allTasks', JSON.stringify(allTasks));

            state.allTasks.push(action.payload);
            state.filteredTasks=[...state.allTasks];
        },

        filterTasks(state, action){
            // If no input/ seach input was cancllled, set it back
            if(action.payload.searchWord === ''){
                state.filteredTasks = [...state.allTasks];
                return;
            }
            // Filter the Tasks based on the search keyword and the status ( since there are 3 status and 3 search bars)
            state.filteredTasks = state.allTasks.filter(eachTask => {
                // For other status tasks, display them
                if(eachTask.status !== action.payload.status)
                    return false;
                // For the current status tasks, match the searched word as well
                else{
                    if(eachTask.name.toLowerCase().includes(action.payload.searchWord.toLowerCase())){
                        return true;
                    }
                    else{
                        return false;
                    }
                }
            });
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