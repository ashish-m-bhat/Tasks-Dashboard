import React from 'react';
import DisplayEachTask from '../DisplayEachTask';
import cssClasses from '../DisplayTasks.module.css';

// Display all the New tasks
const DisplayNotStartedTasks = ({newTasks}) => {
  return (
    <div>
      <h1>New Tasks</h1>
      {newTasks.map(eachNewTask =>
          <DisplayEachTask key={eachNewTask.id} id={eachNewTask.id} name={eachNewTask.name} status={eachNewTask.status} />
      )}
    </div>
  )
}

export default DisplayNotStartedTasks