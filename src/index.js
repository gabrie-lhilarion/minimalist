import './style.css';

const tasks = [
  {
    index: 2,
    description: 'This is the description of the first task',
    completed: false,
  },
  {
    index: 1,
    description: 'This is the description of second task',
    completed: true,
  },
  {
    index: 3,
    description: 'This is the description of third task',
    completed: false,
  },
];

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
  .sort((a, b) => (a.index - b.index))
  .map((task) => `
    <li> 
        <p>
            <span>
                  <label for="task list"> 
                  <input type="checkbox"${task.completed ? 'checked' : ''} />
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