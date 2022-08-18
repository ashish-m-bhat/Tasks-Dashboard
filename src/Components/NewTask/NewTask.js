import React, { useState } from "react";
import Button from "../../UI/Button/Button";
import Card from "../../UI/Card/Card";
import { useDispatch } from "react-redux";
import { taskActions } from "../../Store/TasksStore";

// Displays a Form to create a new task
const NewTask = ({ setShowNewTaskForm }) => {
  const [taskName, setTaskName] = useState("");
  const dispatch = useDispatch();

  // Handler to submit the form
  const addNewTaskHandler = (event) => {
    event.preventDefault();
    if (taskName === "")
        return;

    // New Task object with a random id
    const newTask = {
      id: Math.random() * 99999,
      name: taskName,
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
    <Card>
      <form>
        <fieldset>
          <legend>New Task</legend>
          <div>
            <input
              type="text"
              value={taskName}
              name="taskName"
              onChange={(e) => setTaskName(e.target.value)}
              placeholder='Name'
            />
            <label htmlFor="taskName"></label>
          </div>
          <div>
            <Button onClick={addNewTaskHandler}>Create</Button>
          </div>
          <div>
            <Button onClick={() => setShowNewTaskForm(false)}>Cancel</Button>
          </div>
        </fieldset>
      </form>
    </Card>
  );
};

export default NewTask;
