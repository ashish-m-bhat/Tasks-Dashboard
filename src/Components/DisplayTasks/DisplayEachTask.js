import React from 'react'

// Displays each Task, whichever type it might be of
const DisplayEachTask = ({id, name, status}) => {
  return (
    <div>
      {id}
      {name}
      {status}
    </div>
  )
}

export default DisplayEachTask