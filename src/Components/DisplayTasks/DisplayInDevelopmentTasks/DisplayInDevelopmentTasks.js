import React from 'react'
import DisplayEachTask from '../DisplayEachTask'
import {Droppable} from 'react-beautiful-dnd';

// Display all the Active tasks
const DisplayInDevelopmentTasks = ({activeTasks}) => {
  return (
    /* This section is droppable, means something could be dropped into it*/
    <Droppable droppableId='DisplayInDevelopmentTasks'>
    {
      (provided) =>(
        <div ref={provided.innerRef} {...provided.droppableProps}>
          <h1>Active Tasks</h1>
          {activeTasks.map((eachActiveTask, index) =>
              <DisplayEachTask key={eachActiveTask.id} id={eachActiveTask.id} index={index} name={eachActiveTask.name} assignedTo={eachActiveTask.assignedTo} status={eachActiveTask.status} />
          )}
        {provided.placeholder}
        </div>
      )
    }

    </Droppable>
  )
}

export default DisplayInDevelopmentTasks