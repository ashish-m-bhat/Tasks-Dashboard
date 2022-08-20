import React from 'react';
import './App.css';
import GetAllTasks from './Components/GetAllTasks/GetAllTasks';
import DisplayTasks from './Components/DisplayTasks/DisplayAllTasks/DisplayTasks';

function App() {
  return (
    <div className="App">
      <GetAllTasks />
      <DisplayTasks />
    </div>
  );
}

export default App;
