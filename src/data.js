class Data {


  static create(description, index, completed) {
        return { description, index, completed }
  }

  static get allTasks() {
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

    if (localStorage.getItem('mytodoTasks')) {
      return JSON.parse(localStorage.getItem('mytodoTasks'));
    }
    localStorage.setItem('mytodoTasks', JSON.stringify(tasks));
    return tasks;
  }

  static updateData(status, index) {
    const { allTasks: storedData } = Data;
    storedData[Number(index)].completed = status;

    localStorage.setItem('mytodoTasks', JSON.stringify(storedData));
  }
}

export default Data;