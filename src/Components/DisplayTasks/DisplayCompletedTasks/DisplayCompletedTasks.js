import React from 'react'
import DisplayEachTask from '../DisplayEachTask'
import {Droppable} from 'react-beautiful-dnd';

// Display all the completed tasks
const DisplayCompletedTasks = ({completedTasks}) => {
  return (
    /* This section is droppable, means something could be dropped into it*/
    <Droppable droppableId='DisplayCompletedTasks'>
    {
      (provided)=>(
        <div ref={provided.innerRef} {...provided.droppableProps}>
          <h1>Completed Tasks</h1>
          {completedTasks.map((eachCompletedTask, index) =>
              <DisplayEachTask key={eachCompletedTask.id} id={eachCompletedTask.id} index={index} name={eachCompletedTask.name} status={eachCompletedTask.status} />
          )}
          {provided.placeholder}
        </div>
      )
    }
    </Droppable>
  )
}

export default DisplayCompletedTasks