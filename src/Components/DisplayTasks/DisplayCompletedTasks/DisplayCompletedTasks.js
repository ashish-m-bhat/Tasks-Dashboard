import React from 'react'
import DisplayEachTask from '../DisplayEachTask'

// Display all the completed tasks
const DisplayCompletedTasks = ({completedTasks}) => {
  return (
    <>
      {completedTasks.map(eachCompletedTask =>
          <DisplayEachTask key={eachCompletedTask.id} id={eachCompletedTask.id} name={eachCompletedTask.name} status={eachCompletedTask.status} />
      )}
    </>
  )
}

export default DisplayCompletedTasks