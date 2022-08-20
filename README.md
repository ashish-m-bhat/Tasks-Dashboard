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

                                           Screenshots
                                           
                                           Home screen
![Screenshot (92)](https://user-images.githubusercontent.com/61205415/185744393-6fc1ea98-a0cc-4672-bd5a-e6a1b5aa2448.png)
                                           New Task Form
![Screenshot (91)](https://user-images.githubusercontent.com/61205415/185744349-fe3eadda-9f24-4e74-8bf7-10d6b67041bb.png)
                                           Adding comments on closure
![Screenshot (89)](https://user-images.githubusercontent.com/61205415/185744344-12ea0f79-e401-4a5a-9d79-2de7f356e805.png)

                                           Comments visible with a tooltip
![Screenshot (90)](https://user-images.githubusercontent.com/61205415/185744351-f16db248-3c5e-4a69-ba15-bf1c73a284dd.png)

                                           When user tries to move a task from Active to Completed
![Screenshot (93)](https://user-images.githubusercontent.com/61205415/185744484-0583f52d-6192-4eb0-9301-da8b1a5f3b51.png)
