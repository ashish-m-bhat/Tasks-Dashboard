import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { getTasks } from '../../Store/TasksStore';

// Calls the middleware getTasks which makes an async fetch request
// This initializes the redux store

const DUMMY_TASKS = [{id:0, name:'Write', status:'new'}, {id:1, name:'Read', status:'active'}, {id:2, name:'Sleep', status:'completed'}];

const GetAllTasks = () => {
    const dispatch = useDispatch();
    useEffect(() => {
      // If no tasks, populate the Dashboard with dummy data
        if(!localStorage.getItem('allTasks')){
          localStorage.setItem('allTasks', JSON.stringify(DUMMY_TASKS))
        }
        dispatch(getTasks());
    }, [dispatch])
  return (
    <></>
  )
}

export default GetAllTasks