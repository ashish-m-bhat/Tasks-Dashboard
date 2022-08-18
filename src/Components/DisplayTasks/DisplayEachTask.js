import React, { useRef, useState } from 'react'
import ChangeTaskStatus from '../ChangeTaskStatus/ChangeTaskStatus';
import {Draggable} from 'react-beautiful-dnd';
import cssClasses from '../../UI/Card/Card.module.css';

// Displays each Task, whichever type it might be of
const DisplayEachTask = ({id, index, name, assignedTo, comment, status}) => {
  const [updateTaskStatus, setUpdateTaskStatus] = useState(false);
  const selectStatusRef = useRef();

  // Array to display select options
  const restOfTheStatus = ['new', 'active', 'completed'].filter(e => e!==status);
  return (
    <>
    {/* Each Task is draggable */}
    <Draggable draggableId={id.toString()} index={Math.floor(index)}>
    {
      (provided)=>(
        <div {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef} className={cssClasses.Card}>
          <p>{name}</p>
          <p>Assigned To: {assignedTo}</p>
          { comment?.length && <p>Comment: {comment}</p>}
          <select onChange={() => setUpdateTaskStatus(true)} ref={selectStatusRef}>
            <option value={status}>{status}</option>
            <option value={restOfTheStatus[0]}>{restOfTheStatus[0]}</option>
            <option value={restOfTheStatus[1]}>{restOfTheStatus[1]}</option>
          </select>
      </div>
      )
    }
    </Draggable>
    {updateTaskStatus && <ChangeTaskStatus id={id} updatedStatus={selectStatusRef.current.value} setUpdateTaskStatus={setUpdateTaskStatus}/>}
    </>
  )
}

export default DisplayEachTask