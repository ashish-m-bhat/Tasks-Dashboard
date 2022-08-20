import React, { useState } from "react";
import Button from "../../UI/Button/Button";
import Card from "../../UI/Card/Card";
import { useDispatch } from "react-redux";
import { taskActions } from "../../Store/TasksStore";
import ModalModule from './NewTask.module.css';

// Displays a Form to create a new task
const NewTask = ({ setShowNewTaskForm }) => {
  const [taskName, setTaskName] = useState("");
  const [assignedTo, setAssignedTo] = useState("Myself");
  const dispatch = useDispatch();

  // Handler to submit the form
  const addNewTaskHandler = (event) => {
    event.preventDefault();
    if (taskName === "" || assignedTo === ""){
      alert('Add all the fields!')
      return;
    }

    // New Task object with a random id
    const newTask = {
      id: Math.random() * 99999,
      name: taskName,
      assignedTo:assignedTo,
      status: "new",
    };


    /*
    fetch(objectToPost.url,{
      method:objectToPost.method,
      body:objectToPost.body,
      headers:objectToPost.headers
    })
    .then(response => response.json())
    .then(() => dispatch(taskActions.addNewTask(newTask)))
    .catch(err => alert(err));

    */

   // Update the redux store which then updates the localStorage as well
    dispatch(taskActions.addNewTask(newTask));

    // Reset the form
    setTaskName("");
    setShowNewTaskForm(false);
  };
  return (
    <>
    <div className={ModalModule.backdrop} onClick={() => setShowNewTaskForm(false)}>
    </div>
    <Card className={ModalModule.modal}>
      <form onSubmit={addNewTaskHandler}>
        <header>
          <h2>New Task</h2>
        </header>
        <fieldset>
          <div>
          <label htmlFor="taskName">Task Name</label>
            <input
              type="text"
              value={taskName}
              name="taskName"
              onChange={(e) => setTaskName(e.target.value)}
              placeholder='Enter the Task Name'
            />
            <label htmlFor="taskName"></label>
          </div>
          <div>
            <label htmlFor="assignedTo">Assign To   </label>
            <input
              type="text"
              value={assignedTo}
              name="assignedTo"
              onChange={(e) => setAssignedTo(e.target.value)}
              placeholder='Assign To'
            />
            <label htmlFor="taskName"></label>
          </div>
          <div>
            <Button type="submit" onClick={addNewTaskHandler}>Create</Button>
          </div>
          <div>
            <Button onClick={() => setShowNewTaskForm(false)}>Cancel</Button>
          </div>
        </fieldset>
      </form>
    </Card>
    </>
  );
};

export default NewTask;
