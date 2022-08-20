import React, { useCallback, useRef } from "react";
import { useDispatch } from "react-redux";
import { taskActions } from "../../Store/TasksStore";
import useDebounce from '../../CustomHooks/useDebounce';

// Search the tasks
// On every keystroke, it dispatches the filterTasks action to the redux store

const SearchTasks = ({status}) => {
  const searchTasksRef = useRef();
  const dispatcher = useDispatch();

  // Placeholder based on the status i.e, new/active/completed
  const placeholder = `Search ${status} Tasks`;

  // When something is searched, update the filterTasks[] in the redux store
  const searchTasksHandler = event =>{
    event.preventDefault();
    dispatcher(taskActions.filterTasks({status:status, searchWord:event.target.value}));
  }

  // Get the debounced version of the search handler with 500ms as the delay
  const debouncedSearchTasksHandler = useCallback(useDebounce(searchTasksHandler, 500), []);


  // On clearing the search, fetch all the tasks
  const clearSearchHandler = event =>{
    event.preventDefault();
    searchTasksRef.current.value='';
    dispatcher(taskActions.setTasks(localStorage.getItem('allTasks')));
  }

  return (
    <div>
      <input
        type="text"
        name="searchTasks"
        placeholder={placeholder}
        onChange={debouncedSearchTasksHandler}
        ref={searchTasksRef}
      />
      <button onClick={clearSearchHandler}> X </button>
      {searchTasksRef?.current?.value && <p>Search results for "{searchTasksRef.current.value}"</p>}
    </div>
  );
};

export default SearchTasks;