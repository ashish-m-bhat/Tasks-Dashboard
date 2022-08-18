import React from 'react'
import DisplayCompletedTasks from './DisplayCompletedTasks/DisplayCompletedTasks'
import DisplayInDevelopmentTasks from './DisplayInDevelopmentTasks/DisplayInDevelopmentTasks'
import DisplayNotStartedTasks from './DisplayNotStartedTasks/DisplayNotStartedTasks'
import { useSelector } from 'react-redux'
import cssClasses from './DisplayTasks.module.css';

// Displays 3 types of tasks : Not Started, In development and Completed
// Get the allTasks[] array from the redux store and filter them based on the status key
const DisplayTasks = () => {
    let allTasks = useSelector(state => state.tasks.allTasks);

    // When tasks are updated, the allTasks[] gets duplicate values, with the latest values being at the last
    // This is a bug, the localStoage doesn't have those duplicate values and on refresh, the duplicated values aren't present in the state anymore
    // Cannot use Set since values of the allTasks[] are objects
    // Hence add them to a map with key =>value as id=>taskObject and then get the unique values

    const tasksMap = new Map();
    allTasks.forEach(eachTaskObject =>{
      tasksMap.set(eachTaskObject.id, eachTaskObject)
    });

    allTasks=[];

    for(let value of tasksMap.values())
      allTasks.push(value);

    // Now allTasks[] jhas unique values
    const newTasks = allTasks.filter(e => e.status === 'new');
    const activeTasks = allTasks.filter(eachtask => eachtask.status === 'active');
    const completedTasks = allTasks.filter(eachtask => eachtask.status === 'completed');

  return (
    <div className={cssClasses.DisplayTasks}>
        {/* If tasks are yet to load */}
        {/* {(!newTasks.length || !activeTasks.length || !completedTasks.length) && <h1>Loading...</h1>} */}

        {/* Display Each kind of task */}
         <DisplayNotStartedTasks newTasks={newTasks} />
        <DisplayInDevelopmentTasks activeTasks={activeTasks} />
         <DisplayCompletedTasks completedTasks={completedTasks} />
    </div>
  )
}

export default DisplayTasks