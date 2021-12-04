import './style.css';
import Data from './data.js';
import Handlers from './handlers.js';

const { allTasks: tasks } = Data;
const { handleCheckBoxChange } = Handlers;

const appHeader = `
<li class="appHeader">
    <h1>Today's To Do</h1>
    <span>&#8634</span>
</li>`;

const input = `
<li>
    <label for="New task"><input type="text" placeholder="Add to your list..."></label>
    <span class="save-task">&crarr;</span>
</li>
`;

const todoList = tasks
  .map((task, index) => `
    <li> 
        <p>
            <span>
                  <label for="task list"> 
                  <input data-index="${index}" type="checkbox"${task.completed ? 'checked' : ''} />
                   ${task.description} 
                  </label>
            </span>
            
        </p>
        <span class="drag-around">&#8942</span>
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
});