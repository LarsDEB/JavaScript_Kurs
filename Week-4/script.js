const taskInput = () => document.querySelector('#taskInput').value;
const taskList = () => document.querySelector('#taskList');
const taskListChildren = () => document.querySelectorAll('#taskList li');

// add task
document.getElementById('addTaskBtn').addEventListener('click', (e) => {
  const newListItem = document.createElement('li');
  const checkbox = document.createElement('input');
  const inputValue = taskInput();
  if (inputValue.length >= 3) {
    newListItem.textContent = ` ${inputValue}`;
    checkbox.type = 'checkbox';
    newListItem.prepend(checkbox);
    taskList().prepend(newListItem);
    document.querySelector('#taskInput').value = '';
  } else {
    newListItem.textContent = '!Die Aufgabe muss mindestens drei Zeichen haben!';
    newListItem.id = 'lengthError';
    taskList().prepend(newListItem);
    const lengthError = document.querySelector('#lengthError');
    if (lengthError) {
      setTimeout(() => {
        lengthError.remove();
      }, 3000);
    }
  }
  let taskCountItem = document.querySelector('#taskCount');
  const taskListLength = taskListChildren().length;
  if (taskListLength === 1) { //No taskCoutItem exists -> create it
    taskCountItem = document.createElement('li');
    taskCountItem.id = 'taskCount';
    taskCountItem.textContent = `Du hast noch 1 offene Aufgabe.`;
    taskList().prepend(taskCountItem);
  }
  if (taskListLength > 1) { // taskCountItem already exists -> update it
    taskCountItem.textContent = `Du hast noch ${taskListLength - 1} offene Aufgaben.`;
    taskList().prepend(taskCountItem);
  }
});

// delete all tasks
document.querySelector('#deleteAllBtn').addEventListener('click', (e) => {
  taskListChildren().forEach((child) => {
    child.remove();
  });
});

// random advice
document.querySelector('#tipBtn').addEventListener('click', (e) => {
  const advice = [
    '25 Minuten lernen, 5 Minuten Pause machen.',
    'Stoff laut erklären, als würdest du ihn jemandem beibringen.',
    'Karteikarten für wichtige Begriffe nutzen.',
    'Schwierige Sachen in kleine Teile zerlegen.',
    'Am Ende kurz wiederholen, was du gelernt hast.',
  ];
  const randomNum = () => {
    return Math.floor(Math.random() * advice.length);
  };
  document.querySelector('#tipOutput').textContent = advice[randomNum()];
});

// theme switch
document.querySelector('#themeBtn').addEventListener('click', (e) => {
  document.body.classList.toggle('dark-mode');
});
