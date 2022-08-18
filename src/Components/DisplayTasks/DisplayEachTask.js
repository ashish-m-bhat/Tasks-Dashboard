import React, { useRef, useState } from 'react'
import Card from '../../UI/Card/Card'
import ChangeTaskStatus from '../ChangeTaskStatus/ChangeTaskStatus';

// Displays each Task, whichever type it might be of
const DisplayEachTask = ({id, name, status}) => {
  const [updateTaskStatus, setUpdateTaskStatus] = useState(false);
  const selectStatusRef = useRef();

  // Array to display select options
  const restOfTheStatus = ['new', 'active', 'completed'].filter(e => e!==status);
  return (
    <>
      <Card >
        <p>{name}</p>
        <select onChange={() => setUpdateTaskStatus(true)} ref={selectStatusRef}>
          <option value={status}>{status}</option>
          <option value={restOfTheStatus[0]}>{restOfTheStatus[0]}</option>
          <option value={restOfTheStatus[1]}>{restOfTheStatus[1]}</option>
        </select>
      </Card>
    {updateTaskStatus && <ChangeTaskStatus id={id} updatedStatus={selectStatusRef.current.value} setUpdateTaskStatus={setUpdateTaskStatus}/>}
    </>
  )
}

export default DisplayEachTask