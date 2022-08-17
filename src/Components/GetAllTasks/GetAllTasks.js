import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { getTasks } from '../../Store/TasksStore';

// Calls the middleware getTasks which makes an async fetch request
// This initializes the redux store

const GetAllTasks = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getTasks());
    }, [dispatch])
  return (
    <></>
  )
}

export default GetAllTasks