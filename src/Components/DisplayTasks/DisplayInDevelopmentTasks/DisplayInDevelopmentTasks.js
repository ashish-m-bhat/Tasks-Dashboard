import React from 'react'
import DisplayEachTask from '../DisplayEachTask'

// Display all the Active tasks
const DisplayInDevelopmentTasks = ({activeTasks}) => {
  return (
    <div>
      <h1>Active Tasks</h1>
      {activeTasks.map(eachActiveTask =>
          <DisplayEachTask key={eachActiveTask.id} id={eachActiveTask.id} name={eachActiveTask.name} status={eachActiveTask.status} />
      )}
    </div>
  )
}

export default DisplayInDevelopmentTasks