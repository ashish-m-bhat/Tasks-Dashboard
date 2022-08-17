import React from 'react'
import Card from '../../UI/Card/Card'

// Displays each Task, whichever type it might be of
const DisplayEachTask = ({name, status}) => {
  return (
    <Card >
      <p>{name}</p>
      <p>{status}</p>
    </Card>
  )
}

export default DisplayEachTask