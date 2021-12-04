import './style.css';
import Data from './data.js';
import Handlers from './handlers.js';

const { allTasks: tasks } = Data;
const { handleCheckBoxChange, handleAddTask } = Handlers;

const appHeader = `
<li class="appHeader">
    <h1>Today's To Do</h1>
    <span>&#8634</span>
</li>`;

const input = `
<li>
    
    <input type="text" id="task-description" name="description" placeholder="Add to your list...">
     
    <span class="save-task">&crarr;</span>
</li>
`;

const todoList = tasks
  .sort((a, b) => (a.index - b.index))
  .map((task, index) => `
    <li class="task-item"> 
        <p>
            <span>
                  <label for="task list"> 
                  <input data-index="${index}" type="checkbox"${task.completed ? 'checked' : ''} />
                   ${task.description} 
                  </label>
            </span>
            
        </p>
        <p>
          <i class="remove-item">&times</i>
          <span class="drag-around">&#8942</span>
        </p>
    </li>
`);

const footer = `
<li id="clear-all">
    <div>
        Clear all completed
    </div>
</li>
`;

const minimalist = document.getElementById('minimalist');
minimalist.innerHTML = `
    ${appHeader}
    ${input}
    ${todoList.join('')}
    ${footer}
`;



document.addEventListener('DOMContentLoaded', () => {
  const checkbox = document.querySelectorAll('#minimalist li input');
  checkbox.forEach((box) => box.addEventListener('click', (e) => handleCheckBoxChange(e)));

  const saveTaskButton = document.querySelector(".save-task");
  const currentIndex = document.querySelectorAll(".task-item").length + 1;
  const taskDescription = document.getElementById("task-description")

  saveTaskButton.addEventListener("click", (e) => handleAddTask(e, currentIndex, false) )
});