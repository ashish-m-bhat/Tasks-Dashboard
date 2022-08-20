import React, { useState } from 'react'
import DisplayCompletedTasks from '../DisplayCompletedTasks/DisplayCompletedTasks'
import DisplayInDevelopmentTasks from '../DisplayInDevelopmentTasks/DisplayInDevelopmentTasks'
import DisplayNotStartedTasks from '../DisplayNotStartedTasks/DisplayNotStartedTasks'
import { useSelector } from 'react-redux'
import {DragDropContext} from 'react-beautiful-dnd';
import cssClasses from './DisplayTasks.module.css';
import ChangeTaskStatus from '../../ChangeTaskStatus/ChangeTaskStatus'

// Displays 3 types of tasks : Not Started, In development and Completed
// Get the allTasks[] array from the redux store and filter them based on the status key
const DisplayTasks = () => {

  const [updatedTaskId, setUpdatedTaskId] = useState(-1);
  const [updatedTaskStatus, setUpdatedTaskStatus] = useState('');
  const [updateTaskStatus, setUpdateTaskStatus] = useState(false);

  let allTasks = useSelector(state => state.tasks.allTasks);
  let filteredTasks = useSelector(state => state.tasks.filteredTasks);
  allTasks = [...filteredTasks];

    // When tasks are updated, the allTasks[] gets duplicate values, with the latest values being at the last
    // This is a bug, the localStoage doesn't have those duplicate values and on refresh, the duplicated values aren't present in the state anymore
    // Cannot use Set since values of the allTasks[] are objects
    // Hence add them to a map with key =>value as id=>taskObject and then get the unique values

    const tasksMap = new Map();
    allTasks.forEach(eachTaskObject =>{
      tasksMap.set(eachTaskObject.id, eachTaskObject)
    });

    allTasks=[];

    for(let value of tasksMap.values())
    allTasks.push(value);
    // Now allTasks[] has unique values

    const newTasks = allTasks.filter(e => e.status === 'new');
    const activeTasks = allTasks.filter(eachtask => eachtask.status === 'active');
    const completedTasks = allTasks.filter(eachtask => eachtask.status === 'completed');

    // Function to be executed when something has been dropped after bring dragged
    const onDragEnd = (result) =>{
      const {destination, draggableId} = result; // {droppableId: 'DisplayInDevelopmentTasks', index: 1}
      if(!destination)
        return;
        setUpdatedTaskId(+draggableId);
        setUpdatedTaskStatus(destination.droppableId === 'DisplayNotStartedTasks'? 'new' : destination.droppableId === 'DisplayInDevelopmentTasks'? 'active': 'completed');
        setUpdateTaskStatus(true);
    }
  return (
    <>
      <DragDropContext onDragEnd={onDragEnd}>

        <div className={cssClasses.DisplayTasks}>
            {/* Display Each kind of task */}
            <DisplayNotStartedTasks newTasks={newTasks} />
            <DisplayInDevelopmentTasks activeTasks={activeTasks} />
            <DisplayCompletedTasks completedTasks={completedTasks} />
        </div>
      </DragDropContext>
      {updateTaskStatus && <ChangeTaskStatus id={updatedTaskId} updatedStatus={updatedTaskStatus} setUpdateTaskStatus={setUpdateTaskStatus}/>}
    </>
  )
}

export default DisplayTasks