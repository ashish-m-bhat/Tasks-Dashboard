1. This App let's one manage the Tasks efficiently.
2. The tasks are grouped as New Tasks, Active Tasks/In Development Tasks and Completed Tasks.
3. One can move the Tasks to other states.
4. Task status can be changed by either drag and drop or by selecting the drop down.
5. Tasks cannot be moved across two levels. Ex: One cannot directly move a task from Active to Completed.
6. The App lets one add a new Task. The default assignee is "Myself".
7. The App lets one search the tasks in a particular group: New/Active/Completed Tasks
8. When one tries to close the Task, the user is prompted to add a comment which should not more the be of 30 letters.
9. The comment is then shown as a tooltip. Comments are shown only for completed tasks.
10. The Tasks are stored in the localStorage of the browser.
11. Refreshing or closing the browser will not effect the Tasks.
12. A few tasks are already populated when the App starts.

How to set the app locally?

Run the following commands:
 1. One should have node installed locally, preferably >= v16.13.2
 2. git clone https://github.com/Ashish-M-Bhat/Tasks-Dashboard.git
 3. npm i
 4. npm run start ( This should start the app in the default browser automatically. If not, please go to localhost:3000, provided nothing else is running in the 3000 port)

Extra dependecies needed (will get installed as a part of npm i):

1. @reduxjs/toolkit: ^1.8.4
2. react-beautiful-dnd: ^13.1.0
3. react-redux: ^8.0.2
4. react-scripts: 5.0.1
5. redux : ^4.2.0
