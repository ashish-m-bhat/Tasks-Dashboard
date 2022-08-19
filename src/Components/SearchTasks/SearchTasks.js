import React, { useCallback, useRef } from "react";
import { useDispatch } from "react-redux";
import { taskActions } from "../../Store/TasksStore";
import useDebounce from '../../CustomHooks/useDebounce';

// Search the tasks
// On every keystroke, it dispatches the filterTasks action to the redux store

const SearchTasks = ({status}) => {
  const searchTasksRef = useRef();
  const dispatcher = useDispatch();

  const searchTasksHandler = event =>{
    event.preventDefault();
    // Update the filterTasks[] in the redux store
    dispatcher(taskActions.filterTasks({status:status, searchWord:event.target.value}));

    // Remove the searched item automatically after 5000ms
    setTimeout(()=> searchTasksRef.current.value='',5000)
  }

  // Get the debounced version of the search handler with 500ms as the delay
  const debouncedSearchTasksHandler = useCallback(useDebounce(searchTasksHandler, 500), []);

  // Placeholder based on the status i.e, new/active/completed
  const placeholder = `Search ${status} Tasks`;

  return (
    <div>
      <input
        type="text"
        name="searchTasks"
        placeholder={placeholder}
        onChange={debouncedSearchTasksHandler}
        ref={searchTasksRef}
      />
    </div>
  );
};

export default SearchTasks;