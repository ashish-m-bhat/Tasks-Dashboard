import React from 'react'
import DisplayCompletedTasks from './DisplayCompletedTasks/DisplayCompletedTasks'
import DisplayInDevelopmentTasks from './DisplayInDevelopmentTasks/DisplayInDevelopmentTasks'
import DisplayNotStartedTasks from './DisplayNotStartedTasks/DisplayNotStartedTasks'
import { useSelector } from 'react-redux'
import cssClasses from './DisplayTasks.module.css';

// Displays 3 types of tasks : Not Started, In development and Completed
// Get the alltasks[] array from the redux store and filter them based on the status key
const DisplayTasks = () => {
    const alltasks = useSelector(state => state.tasks.allTasks);

    const newTasks = alltasks.filter(e => e.status === 'new');
    const activeTasks = alltasks.filter(eachtask => eachtask.status === 'active');
    const completedTasks = alltasks.filter(eachtask => eachtask.status === 'completed');

  return (
    <div className={cssClasses.DisplayTasks}>
        {/* If tasks are yet to load */}
        {(!newTasks.length || !activeTasks.length || !completedTasks.length) && <h1>Loading...</h1>}

        {/* Display Each kind of task */}
        {!!newTasks.length && <DisplayNotStartedTasks newTasks={newTasks} />}
        {!!activeTasks.length && <DisplayInDevelopmentTasks activeTasks={activeTasks} />}
        {!!completedTasks.length && <DisplayCompletedTasks completedTasks={completedTasks} />}
    </div>
  )
}

export default DisplayTasks