import React from 'react'
import DisplayEachTask from '../DisplayEachTask'

// Display all the Active tasks
const DisplayInDevelopmentTasks = ({activeTasks}) => {
  return (
    <>
      {activeTasks.map(eachActiveTask =>
          <DisplayEachTask key={eachActiveTask.id} id={eachActiveTask.id} name={eachActiveTask.name} status={eachActiveTask.status} />
      )}
    </>
  )
}

export default DisplayInDevelopmentTasks