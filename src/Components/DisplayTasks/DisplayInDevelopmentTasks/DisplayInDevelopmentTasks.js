import React from 'react';
import {Droppable} from 'react-beautiful-dnd';
import SearchTasks from '../../SearchTasks/SearchTasks';
import DisplayEachTask from '../DisplayEachTask/DisplayEachTask';

// Display all the Active tasks. The parent component passes this based on the filter (searched letters)
const DisplayInDevelopmentTasks = ({activeTasks}) => {
  return (
    /* This section is droppable, means something could be dropped into it*/
    <Droppable droppableId='DisplayInDevelopmentTasks'>
    {
      (provided) =>(
        <div ref={provided.innerRef} {...provided.droppableProps}>
          <SearchTasks status='active'/>
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

export default DisplayInDevelopmentTasks;