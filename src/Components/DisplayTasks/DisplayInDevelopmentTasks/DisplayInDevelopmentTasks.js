import React, { useEffect, useState } from 'react';
import {Droppable} from 'react-beautiful-dnd';
import SearchTasks from '../../SearchTasks/SearchTasks';
import DisplayEachTask from '../DisplayEachTask/DisplayEachTask';

// Display all the Active tasks. The parent component passes this based on the filter (searched letters)
// Displays: A header "Active Tasks", "Loading..." state if something is searched, the  Active Tasks and a header "No Active Tasks" if there aren't active tasks

const DisplayInDevelopmentTasks = ({activeTasks}) => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(()=>{
    isLoading && setTimeout(()=>setIsLoading(false), 500)
  }, [isLoading, setIsLoading]);

  return (
    /* This section is droppable, means something could be dropped into it*/
    <Droppable droppableId='DisplayInDevelopmentTasks'>
    {
      (provided) =>(
        <div ref={provided.innerRef} {...provided.droppableProps}>
          <SearchTasks status='active' setIsLoading={setIsLoading} />
          <h1>Active Tasks</h1>
          {isLoading&& <h1>Loading...</h1>}

          {!isLoading && activeTasks.map((eachActiveTask, index) =>
              <DisplayEachTask key={eachActiveTask.id} id={eachActiveTask.id} index={index} name={eachActiveTask.name} assignedTo={eachActiveTask.assignedTo} status={eachActiveTask.status} />
          )}

          {!isLoading && !activeTasks.length && <h1>No Active Tasks</h1>}
        {provided.placeholder}
        </div>
      )
    }

    </Droppable>
  )
}

export default DisplayInDevelopmentTasks;