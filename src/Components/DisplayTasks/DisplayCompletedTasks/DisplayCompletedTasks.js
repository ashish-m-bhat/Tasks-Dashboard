import React from 'react'
import {Droppable} from 'react-beautiful-dnd';
import SearchTasks from '../../SearchTasks/SearchTasks';
import DisplayEachTask from '../DisplayEachTask/DisplayEachTask';

// Display all the completed tasks
const DisplayCompletedTasks = ({completedTasks}) => {
  return (
    /* This section is droppable, means something could be dropped into it*/
    <Droppable droppableId='DisplayCompletedTasks'>
    {
      (provided)=>(
        <div ref={provided.innerRef} {...provided.droppableProps}>
          <SearchTasks status='completed' />
          <h1>Completed Tasks</h1>
          {completedTasks.map((eachCompletedTask, index) =>
              <DisplayEachTask key={eachCompletedTask.id} id={eachCompletedTask.id} index={index} name={eachCompletedTask.name} assignedTo={eachCompletedTask.assignedTo} comment={eachCompletedTask.comment} status={eachCompletedTask.status} />
          )}
          {provided.placeholder}
        </div>
      )
    }
    </Droppable>
  )
}

export default DisplayCompletedTasks