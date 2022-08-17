import React from 'react'
import DisplayEachTask from '../DisplayEachTask'

// Display all the completed tasks
const DisplayCompletedTasks = ({completedTasks}) => {
  return (
    <div>
      <h1>Completed Tasks</h1>
      {completedTasks.map(eachCompletedTask =>
          <DisplayEachTask key={eachCompletedTask.id} name={eachCompletedTask.name} status={eachCompletedTask.status} />
      )}
    </div>
  )
}

export default DisplayCompletedTasks