import React from 'react'
import Card from '../../UI/Card/Card'

// Displays each Task, whichever type it might be of
const DisplayEachTask = ({id, name, status}) => {
  return (
    <Card >
      <p>{id}</p>
      <p>{name}</p>
      <p>{status}</p>
    </Card>
  )
}

export default DisplayEachTask