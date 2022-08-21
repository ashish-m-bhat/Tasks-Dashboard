import React, { useEffect, useState } from 'react'
import {Droppable} from 'react-beautiful-dnd';
import SearchTasks from '../../SearchTasks/SearchTasks';
import DisplayEachTask from '../DisplayEachTask/DisplayEachTask';

// Display all the completed tasks
// Displays: A header "Completed Tasks", "Loading..." state if something is searched, the  Completed Tasks and a header "No Completed Tasks" if there aren't completed tasks

const DisplayCompletedTasks = ({completedTasks}) => {
  const [isLoading, setIsLoading] = useState(false);
  useEffect(()=>{
    isLoading && setTimeout(()=>setIsLoading(false), 500)
  }, [isLoading, setIsLoading]);

  return (
    /* This section is droppable, means something could be dropped into it*/
    <Droppable droppableId='DisplayCompletedTasks'>
    {
      (provided)=>(
        <div ref={provided.innerRef} {...provided.droppableProps}>
          <SearchTasks status='completed' setIsLoading={setIsLoading} />
          <h1>Completed Tasks</h1>

          {isLoading&& <h1>Loading...</h1>}

          {!isLoading && completedTasks.map((eachCompletedTask, index) =>
              <DisplayEachTask key={eachCompletedTask.id} id={eachCompletedTask.id} index={index} name={eachCompletedTask.name} assignedTo={eachCompletedTask.assignedTo} comment={eachCompletedTask.comment} status={eachCompletedTask.status} />
              )}

          {!isLoading && !completedTasks.length && <h1>No Completed Tasks</h1>}
          {provided.placeholder}
        </div>
      )
    }
    </Droppable>
  )
}

export default DisplayCompletedTasks