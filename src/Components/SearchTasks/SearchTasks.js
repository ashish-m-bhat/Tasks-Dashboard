import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { taskActions } from "../../Store/TasksStore";

// Search the tasks
// On every keystroke, it dispatches the filterTasks action to the redux store

const SearchTasks = () => {
  const [searchTasks, setSearchTasks] = useState("");
  const dispatcher = useDispatch();

  const searchTasksHandler = event =>{
    event.preventDefault();
    setSearchTasks(event.target.value);
    dispatcher(taskActions.filterTasks(event.target.value));
    setTimeout(()=> setSearchTasks(''),3000)
  }
  return (
    <div>
      <input
        type="text"
        value={searchTasks}
        name="searchTasks"
        placeholder="Search Tasks"
        onChange={searchTasksHandler}
      />
    </div>
  );
};

export default SearchTasks;