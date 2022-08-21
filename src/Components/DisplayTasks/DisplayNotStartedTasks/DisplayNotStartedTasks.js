import React, { useEffect, useState } from "react";
import Button from "../../../UI/Button/Button";
import NewTask from "../../NewTask/NewTask";
import DisplayEachTask from "../DisplayEachTask/DisplayEachTask";
import cssClasses from "./DisplayNotStartedTasks.module.css";
import {Droppable} from 'react-beautiful-dnd';
import SearchTasks from "../../SearchTasks/SearchTasks";

// Display all the New tasks
// Also lets users add a new task by calling in NewTask component
// Displays: A header "New Tasks", "Loading..." state if something is searched, the  New Tasks and a header "No New Tasks" if there aren't new tasks

const DisplayNotStartedTasks = ({ newTasks }) => {

  // state to toggle the form
  const [showNewTaskForm, setShowNewTaskForm] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(()=>{
    isLoading && setTimeout(()=>setIsLoading(false), 500)
  }, [isLoading, setIsLoading]);

  return (
    /* This section is droppable, means something could be dropped into it*/
    <Droppable droppableId='DisplayNotStartedTasks'>
    {
      (provided) => (
        <div className={cssClasses.DisplayNotStartedTasks} ref={provided.innerRef} {...provided.droppableProps}>
          <SearchTasks status='new' setIsLoading={setIsLoading} />
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

          {isLoading&& <h1>Loading...</h1>}

          {/* List all new tasks */}
          {!isLoading && newTasks.map((eachNewTask, index) => (
            <DisplayEachTask
              key={eachNewTask.id}
              index={index}
              id={eachNewTask.id}
              name={eachNewTask.name}
              assignedTo={eachNewTask.assignedTo}
              status={eachNewTask.status}
            />
          ))}

          {!isLoading && !newTasks.length && <h1>No New Tasks</h1>}

        {provided.placeholder}
        </div>
      )
    }
    </Droppable>
  );
};

export default DisplayNotStartedTasks;
