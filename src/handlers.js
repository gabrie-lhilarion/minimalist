import Data from './data.js';

class Handlers {
  static handleCheckBoxChange(e) {
    if (e.target.tagName === 'INPUT') {
      const { updateData } = Data;
      const status = e.target.checked;
      const index = e.target.getAttribute('data-index');

      updateData(status, index);
    }
  }

  static handleAddTask(e, completed) {
      const { allTasks, create } = Data;
      const currentIndex = document.querySelectorAll(".task-item").length + 1;
      const description = e.target.previousElementSibling.value;
      const newTask = create(description, currentIndex, completed)
      const afterAddNew = [...allTasks, newTask]
      
      localStorage.setItem("mytodoTasks", JSON.stringify(afterAddNew))
     
      const { appendTask } = Handlers;
      appendTask(newTask);
  }

  static removeTask(e) {
      if (e.target.className === "remove-item") {
          const index = e.target.getAttribute("data-index");
           // remove from storage
           const { allTasks } = Data;
           allTasks.splice(index, 1);
           localStorage.setItem("mytodoTasks", JSON.stringify(allTasks))
           e.target.parentElement.parentElement.remove()
           console.log(index);
            // remove from UI
      }
     
  }

  static appendTask(task) {
    const listItem = `
    <li class="task-item">
        <p>
            <span>
                <label for="task list"> 
                <input data-index="${task.index - 1}" type="checkbox" />
                ${task.description} 
                </label>
            </span>
        </p>
        <p>
            <i  data-index="${task.index - 1}" class="remove-item">&times</i>
            <span class="drag-around">&#8942</span>
        </p>
    </li>
    `;

    const clearAll = document.getElementById("clear-all");
    clearAll.insertAdjacentHTML("beforebegin", listItem)
  }
}

export default Handlers;
