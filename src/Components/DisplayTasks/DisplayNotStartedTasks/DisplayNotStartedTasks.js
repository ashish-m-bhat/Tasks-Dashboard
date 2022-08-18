import React, { useState } from "react";
import Button from "../../../UI/Button/Button";
import NewTask from "../../NewTask/NewTask";
import DisplayEachTask from "../DisplayEachTask";
import cssClasses from "./DisplayNotStartedTasks.module.css";

// Display all the New tasks
// Also lets users add a new task by calling in NewTask component
const DisplayNotStartedTasks = ({ newTasks }) => {

  // state to toggle the form
  const [showNewTaskForm, setShowNewTaskForm] = useState(false);
  return (
    <div className={cssClasses.DisplayNotStartedTasks}>
      <h1>
        New Tasks

          {/* Toggle New task Form. Show the + button only if form isn't visible */}
          {!showNewTaskForm && (
            <Button
              onClick={() => setShowNewTaskForm(true)}
              className={cssClasses.addNewTaskButton}
            >
              +
            </Button>
          )}
      </h1>

      {/* Toggle New task Form */}
      {showNewTaskForm && <NewTask setShowNewTaskForm={setShowNewTaskForm} />}

      {/* List all new tasks */}
      {newTasks.map((eachNewTask) => (
        <DisplayEachTask
          key={eachNewTask.id}
          id={eachNewTask.id}
          name={eachNewTask.name}
          status={eachNewTask.status}
        />
      ))}
    </div>
  );
};

export default DisplayNotStartedTasks;
