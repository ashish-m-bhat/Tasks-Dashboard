import React, { useState } from "react";
import Button from "../../UI/Button/Button";
import Card from "../../UI/Card/Card";
import { useDispatch } from "react-redux";
import { taskActions } from "../../Store/TasksStore";
import useHttp from '../../CustomHooks/useHttp';

// Displays a Form to create a new task
const NewTask = ({ setShowNewTaskForm }) => {
  const [taskName, setTaskName] = useState("");
  const dispatch = useDispatch();

  // satisfyRequest is the funciton to be called when a fetch is to be made
  // useHttp takes in a callback that executed when the fetch is sucessfull
  const satisfyRequest = useHttp((data)=> dispatch(taskActions.addNewTask(data)));

  // Handler to submit the form
  const addNewTaskHandler = (event) => {
    event.preventDefault();
    if (taskName === "")
        return;

    // New Tasj=k object with a random id
    const newTask = {
      id: Math.random() * 99999,
      name: taskName,
      status: "new",
    };

    // Object to be posted
    const objectToPost = {
      url: "https://react-http-bf239-default-rtdb.firebaseio.com/Tasks.json",
      method: "POST",
      body: JSON.stringify(newTask),
      headers: {
        "Content-type": "application/json",
      }
    };

    // Send the data to the backend
    satisfyRequest(objectToPost)

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
            />
            <label htmlFor="taskName">task Name</label>
          </div>
          <div>
            <Button onClick={addNewTaskHandler}>Create Task</Button>
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
