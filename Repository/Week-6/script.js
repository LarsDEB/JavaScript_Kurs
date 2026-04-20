// imports
import { deleteIcon, editIcon } from './icons.js';

// global variables
const taskListEl = document.getElementById('taskList');
const allFilterButtons = document.querySelectorAll('.filterButton');
let prevNum = null; // Global variable from the previous motivation tip for preventing duplicate selections
let tasks = loadTasks();

/* add task */
document.getElementById('addTaskForm').addEventListener('submit', addTaskHandler);

function addTaskHandler(event) {
  event.preventDefault();

  const taskInput = document.getElementById('taskInput');
  const taskInputText = document.getElementById('taskInput').value.trim();
  const lengthError = document.getElementById('lengthError');

  if (taskInputText.length < 3) {
    lengthError.classList.remove('invisible');
    return;
  }

  lengthError.classList.add('invisible');

  tasks.push({
    id: Number(Date.now()),
    text: taskInputText,
    isDone: false,
  });
  taskInput.value = '';

  saveTasks();
  renderTasks();
}
function createTaskItem(taskData) {
  // create elements
  const newTask = document.createElement('li');
  const newEditInput = document.createElement('input');
  const newEditSubmitBtn = document.createElement('button');
  const newEditCancelBtn = document.createElement('button');
  const newEditBtn = document.createElement('button');
  const newDelBtn = document.createElement('button');
  const newliContent = document.createElement('span');
  const newCheckbox = document.createElement('input');

  // edit elements
  newliContent.textContent = taskData.text;
  newEditInput.type = 'text';
  newEditInput.classList.add('editTask', 'editInput', 'invisible');
  newEditSubmitBtn.classList.add('editTask', 'liBtn', 'editSubmitBtn', 'invisible');
  newEditSubmitBtn.dataset.tooltip = 'Übernehmen';
  newEditCancelBtn.classList.add('editTask', 'liBtn', 'editCancelBtn', 'invisible');
  newEditCancelBtn.dataset.tooltip = 'Abbrechen';
  newEditBtn.classList.add('editBtn', 'liBtn');
  newEditBtn.innerHTML = editIcon;
  newEditBtn.dataset.tooltip = 'Bearbeiten';
  newDelBtn.classList.add('deleteBtn', 'liBtn');
  newDelBtn.dataset.tooltip = 'Löschen';
  newDelBtn.innerHTML = deleteIcon;
  newCheckbox.type = 'checkbox';
  newTask.id = taskData.id;

  // merge elements to one listitem
  newTask.appendChild(newliContent);
  newTask.appendChild(newEditInput);
  newTask.appendChild(newEditSubmitBtn);
  newTask.appendChild(newEditCancelBtn);
  newTask.appendChild(newEditBtn);
  newTask.appendChild(newDelBtn);
  newTask.appendChild(newCheckbox);

  // edit whole task after merge
  setTaskDone(newTask, taskData.isDone);

  return newTask;
}
function setTaskDone(taskItem, isDone) {
  taskItem.classList.toggle('done', isDone);
  taskItem.querySelector('input[type="checkbox"]').checked = isDone;
}

// task options
document.getElementById('taskList').addEventListener('click', taskOptionHandler);

function taskOptionHandler(event) {
  const target = event.target;
  const taskDom = target.closest('li');
  if (!taskDom) return;
  const taskId = Number(taskDom.id);

  const button = target.closest('button');
  if (button) {
    if (button.classList.contains('editSubmitBtn')) {
      editTaskValue(taskId, taskDom.querySelector('.editInput').value);
    } else if (button.classList.contains('editCancelBtn')) {
      // do nothing
    } else if (button.classList.contains('editBtn')) {
      startEditMode(taskDom);
      return;
    } else if (button.classList.contains('deleteBtn')) {
      deleteTask(taskId);
    }
  } else if (target.closest('input.editInput')) {
    // do nothing
    return;
  } else {
    const isCurrentlyDone = taskDom.classList.contains('done');
    markTaskDone(taskId, !isCurrentlyDone);
  }
  saveTasks();
  renderTasks();
}

function startEditMode(task) {
  const span = task.querySelector('span');
  const editBtn = task.querySelector('button.editBtn');
  const editItems = task.querySelectorAll('.editTask');
  const editInput = task.querySelector('.editInput');
  editInput.value = span.textContent;
  focusAndSelect(editInput);
  span.classList.add('invisible');
  editBtn.classList.add('invisible');
  editItems.forEach((e) => e.classList.remove('invisible'));
}

function focusAndSelect(input) {
  setTimeout(() => {
    input.focus();
    input.select();
  }, 0);
}

//count tasks
function updateTaskCounters() {
  const filterButtons = document.querySelectorAll('.filterButton span');
  const filterAll = document.querySelector('.filterButton[data-filter="all"] span');
  const filterOpen = document.querySelector('.filterButton[data-filter="open"] span');
  const filterDone = document.querySelector('.filterButton[data-filter="done"] span');
  filterButtons.forEach((e) => {
    e.textContent = 0;
  });
  tasks.forEach((e) => {
    filterAll.textContent++;
    if (e.isDone) {
      filterDone.textContent++;
    } else {
      filterOpen.textContent++;
    }
  });
}

// filter
document.querySelector('#filterBtnContainer').addEventListener('click', updateFilter);

// update filterButton
function updateFilterBtn(button) {
  if (!button) return;

  allFilterButtons.forEach((btn) => {
    btn.classList.remove('active');
  });
  button.classList.add('active');
}

// update filter
function updateFilter(event) {
  if (!event) event = { target: document.querySelector('.filterButton.active') };
  const taskListItems = document.querySelectorAll('#taskList li');
  const filterType = event.target.dataset.filter;
  if (!filterType) return;
  const taskInvisibilityRules = {
    all: () => false,
    open: (element) => element.classList.contains('done'),
    done: (element) => !element.classList.contains('done'),
  };
  taskListItems.forEach((element) => {
    const shouldBeInvisible = taskInvisibilityRules[filterType](element);
    element.classList.toggle('invisible', shouldBeInvisible);
  });
  const button = event.target.closest('.filterButton');
  updateFilterBtn(button);
}

// give random motivation
document.querySelector('#motivationBtn').addEventListener('click', (e) => {
  const motivation = [
    '25 Minuten lernen, 5 Minuten Pause machen.',
    'Stoff laut erklären, als würdest du ihn jemandem beibringen.',
    'Karteikarten für wichtige Begriffe nutzen.',
    'Schwierige Sachen in kleine Teile zerlegen.',
    'Am Ende kurz wiederholen, was du gelernt hast.',
  ];
  const randomNum = () => {
    let num = null;
    while (true) {
      num = Math.floor(Math.random() * motivation.length);
      if (num === prevNum) {
        prevNum = num;
        continue;
      }
      break;
    }
    prevNum = num;
    return num;
  };
  document.querySelector('#motivationOutput').textContent = motivation[randomNum()];
});

function loadTasks() {
  const stored = localStorage.getItem('taskList');
  return stored ? JSON.parse(stored) : [];
}

function saveTasks() {
  localStorage.setItem('taskList', JSON.stringify(tasks));
}

function renderTasks() {
  taskListEl.replaceChildren();
  tasks.forEach((task) => {
    const li = createTaskItem(task);
    taskListEl.append(li);
  });

  updateTaskCounters();
  updateFilter();
}

function deleteTask(taskId) {
  tasks = tasks.filter((t) => t.id !== taskId);
  saveTasks();
  renderTasks();
}

function markTaskDone(taskId, setDone) {
  const task = tasks.find((t) => t.id === taskId);
  if (!task) return;
  task.isDone = setDone;
  saveTasks();
  renderTasks();
}

function editTaskValue(taskId, newValue) {
  const task = tasks.find((t) => t.id === taskId);
  if (!task) return;
  task.text = newValue;
  saveTasks();
  renderTasks();
}

document.addEventListener('DOMContentLoaded', () => {
  tasks = loadTasks();
  renderTasks();
});

window.addEventListener('storage', () => {
  tasks = loadTasks();
  renderTasks();
});
