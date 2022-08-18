import React, { useState } from "react";
import Button from "../../../UI/Button/Button";
import NewTask from "../../NewTask/NewTask";
import DisplayEachTask from "../DisplayEachTask";
import cssClasses from "./DisplayNotStartedTasks.module.css";
import {Droppable} from 'react-beautiful-dnd';

// Display all the New tasks
// Also lets users add a new task by calling in NewTask component
const DisplayNotStartedTasks = ({ newTasks }) => {

  // state to toggle the form
  const [showNewTaskForm, setShowNewTaskForm] = useState(false);
  return (
    /* This section is droppable, means something could be dropped into it*/
    <Droppable droppableId='DisplayNotStartedTasks'>
    {
      (provided) => (
        <div className={cssClasses.DisplayNotStartedTasks} ref={provided.innerRef} {...provided.droppableProps}>
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
          {newTasks.map((eachNewTask, index) => (
            <DisplayEachTask
              key={eachNewTask.id}
              index={index}
              id={eachNewTask.id}
              name={eachNewTask.name}
              assignedTo={eachNewTask.assignedTo}
              status={eachNewTask.status}
            />
          ))}
        {provided.placeholder}
        </div>
      )
    }
    </Droppable>
  );
};

export default DisplayNotStartedTasks;
