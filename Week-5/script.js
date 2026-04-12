// ----------------------------------------------------
//                    add task
// ----------------------------------------------------
// create new listitem
function createLi(text, done) {
  // create elements
  const newTask = document.createElement('li');
  const newDelBtn = document.createElement('button');
  const liContent = document.createElement('span');
  const newCheckbox = document.createElement('input');

  // edit elements
  liContent.textContent = text;
  newDelBtn.classList.add('deleteBtn');
  newDelBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px"
  fill="currentColor">
  <path
    d="M312-144q-29.7 0-50.85-21.15Q240-186.3 240-216v-480h-48v-72h192v-48h192v48h192v72h-48v479.57Q720-186 698.85-165T648-144H312Zm336-552H312v480h336v-480ZM384-288h72v-336h-72v336Zm120 0h72v-336h-72v336ZM312-696v480-480Z" />
</svg>`;
  newCheckbox.type = 'checkbox';
  if (!done) done = false;
  newTask.classList.toggle('done', done);
  newCheckbox.checked = done;

  // merge elements to one listitem
  newTask.appendChild(liContent);
  newTask.appendChild(newDelBtn);
  newTask.appendChild(newCheckbox);
  return newTask;
}

// Add Task
document.getElementById('addTaskForm').addEventListener('submit', function addTask(event) {
  if (event) event.preventDefault();

  const taskList = document.getElementById('taskList');
  const taskInput = document.getElementById('taskInput');
  const lengthError = document.getElementById('lengthError');
  if (taskInput.value.length < 3) {
    lengthError.classList.remove('invisible');
    return;
  } else {
    lengthError.classList.add('invisible');
    taskList.append(createLi(taskInput.value));
    taskInput.value = '';
  }
  updateTaskArray();
  updateTaskCount();
  updateFilter({ target: document.querySelector('#filterAll') });
});

// --------------------------------------------------
//                  filter
// --------------------------------------------------

// update filterButton
function updateFilterBtn(event) {
  const filterbuttons = document.querySelectorAll('.filterButton');
  filterbuttons.forEach((btn) => {
    btn.classList.remove('active');
  });
  event.target.classList.add('active');
}

// filter tasks
function filterAll(event, listItems) {
  listItems.forEach((element) => {
    element.classList.remove('invisible');
  });
  updateFilterBtn(event);
}
function filterOpen(event, listItems) {
  listItems.forEach((element) => {
    element.classList.toggle('invisible', element.classList.contains('done'));
  });
  updateFilterBtn(event);
}
function filterDone(event, listItems) {
  listItems.forEach((element) => {
    element.classList.toggle('invisible', !element.classList.contains('done'));
  });
  updateFilterBtn(event);
}

// update filter
function updateFilter(event) {
  const taskListItems = document.querySelectorAll('#taskList li');
  if (event.target.id === 'filterAll') return filterAll(event, taskListItems);
  if (event.target.id === 'filterOpen') return filterOpen(event, taskListItems);
  if (event.target.id === 'filterDone') return filterDone(event, taskListItems);
}

document
  .querySelectorAll('.filterButton')
  .forEach((e) => e.addEventListener('click', updateFilter));

// ---------------------------------------------------
//                task options
// ---------------------------------------------------
document.getElementById('taskList').addEventListener('click', (event) => {
  const target = event.target;
  const button = target.closest('BUTTON');
  if (button && button.classList.contains('deleteBtn')) {
    const listItem = target.closest('li');
    listItem.remove();
    updateTaskCount();
    updateTaskArray();
    return;
  } else {
    markTaskDone(event);
    updateTaskCount();
    const filter = document.querySelector('.filterButton.active');
    updateFilter({ target: filter });
    return;
  }
});

// mark task as done
function markTaskDone(list) {
  const listItem = list.target.closest('li');
  listItem.classList.toggle('done');
  listItem.querySelector('input[type="checkbox"]').checked = listItem.classList.contains('done');
  updateTaskArray();
}

//count tasks
function updateTaskCount() {
  const taskItems = document.getElementById('taskList').querySelectorAll('li');
  const filterButtons = document.querySelectorAll('.filterButton span');
  filterButtons.forEach((e) => {
    e.textContent = 0;
  });
  taskItems.forEach((e) => {
    filterButtons[0].textContent++;
    if (e.classList.contains('done')) {
      filterButtons[2].textContent++;
    } else {
      filterButtons[1].textContent++;
    }
  });
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
    let prevNum = null;
    let num = null;
    while (true) {
      num = Math.floor(Math.random() * motivation.length);
      if (num === prevNum) {
        prevNum = num;
        continue;
      }
      break;
    }
    return num;
  };
  document.querySelector('#motivationOutput').textContent = motivation[randomNum()];
});

// ------------------------------------------------------
//                  page reload
// ------------------------------------------------------
function pageReload() {
  const taskList = document.querySelector('#taskList');
  taskList.replaceChildren();
  const storedTaskList = JSON.parse(window.localStorage.getItem('taskList'));
  if (storedTaskList) {
    storedTaskList.forEach((e) => {
      taskList.append(createLi(e.text, e.done));
    });
    updateFilter({ target: document.querySelector('#filterAll') });
    updateTaskCount();
  }
}

// pageReload();
function updateTaskArray() {
  const taskListItems = document.querySelectorAll('#taskList li');
  const tasks = [];
  taskListItems.forEach((e) => {
    const itemInfomation = {
      text: e.querySelector('span').textContent,
      done: e.classList.contains('done'),
    };
    tasks.push(itemInfomation);
  });
  window.localStorage.setItem('taskList', JSON.stringify(tasks));
}

document.addEventListener('DOMContentLoaded', () => {
  pageReload();
});

window.addEventListener('storage', () => {
  pageReload();
});
