import React from 'react'
import DisplayEachTask from '../DisplayEachTask'

// Display all the New tasks
const DisplayNotStartedTasks = ({newTasks}) => {
  return (
    <>
      {newTasks.map(eachNewTask =>
          <DisplayEachTask key={eachNewTask.id} id={eachNewTask.id} name={eachNewTask.name} status={eachNewTask.status} />
      )}
    </>
  )
}

export default DisplayNotStartedTasks