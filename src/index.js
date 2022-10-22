import './style.css';
import test from './test.js';
import check from './assets/images/check.png';
import checklist from './assets/images/checklist.png';
import bin from './assets/images/delete.png';
import edit from './assets/images/edit.png';
import info from './assets/images/info.png';
import star from './assets/images/star.png';

test();

const projects = new Set();
let tasks = [];


function initializeListeners() {

  openTaskModalListener();
  hideTaskModalListener();
  addTaskListener();
  clickOutsideTaskModal();
  clickOutsideInfoModal();
  clickOutsideEditModal()
  createProjectListener();
  removeTaskListener();
  checkboxListeners();
  editAndInfoListeners();
  updateTaskListener();
  importantFilterListener();
  homeFilterListener();
  todayFilterListener();
  taskHeaderListener();

}

function openTaskModalListener() {
  const createTask = document.querySelector('.create-task');
  createTask.onclick = displayTaskModal;
}

function hideTaskModalListener() {
  const cancelTaskModal = document.getElementById('cancel-task-btn');
  cancelTaskModal.onclick = hideTaskModal;
}

function displayTaskModal() {
  const addTaskModal = document.getElementById('task-modal-container');
  const closeTaskModal = document.getElementById('close-task-modal');
  addTaskModal.style.display = 'block';
  createProjectOptions();
  const taskTitle = document.getElementById('task-title');
  taskTitle.focus();
  closeTaskModal.onclick = hideTaskModal;
}

function hideTaskModal() {
  const addTaskModal = document.getElementById('task-modal-container');
  addTaskModal.style.display = 'none';
  clearTaskModal();
}

function addTaskListener() {
  const addTaskBtn = document.getElementById('add-task-btn');
  addTaskBtn.onclick = getTask;
}

function getTask() {
  const taskTitle = document.getElementById('task-title');
  const taskDueDate = document.getElementById('task-due-date');
  const taskPriority = document.getElementById('task-priority');
  const taskDescription = document.getElementById('task-description');
  const taskProject = document.getElementById('task-project');

  let task = {
    id: assignTaskId(),
    title: taskTitle.value,
    dueDate: taskDueDate.value,
    isPriority: taskPriority.checked,
    description: taskDescription.value,
    project: taskProject.value,
    completed: false,
  }
  if (task.title && task.dueDate) {
    tasks.push(task);
    appendTaskList(taskTemplate(task));
  }
  hideTaskModal();
  
}

function clearTaskModal() {
  const taskTitle = document.getElementById('task-title');
  const taskDueDate = document.getElementById('task-due-date');
  const taskPriority = document.getElementById('task-priority');
  const taskDescription = document.getElementById('task-description');
  const taskProject = document.getElementById('task-project');

  taskTitle.value = null;
  taskDueDate.value = null;
  taskPriority.checked = null;
  taskDescription.value = null;
  taskProject.value = null;
}

function clickOutsideTaskModal() {
  const modalContainer = document.getElementById('task-modal-container');
  modalContainer.onclick = e => {
    if (e.target.parentElement.tagName === 'BODY') hideTaskModal();
  }
}

function clickOutsideInfoModal() {
  const modalContainer = document.getElementById('info-modal-container');
  modalContainer.onclick = e => {
    if (e.target.parentElement.tagName === 'BODY') hideInfoModal();
  }
}

function clickOutsideEditModal() {
  const modalContainer = document.getElementById('edit-modal-container');
  modalContainer.onclick = e => {
    if (e.target.parentElement.tagName === 'BODY') hideEditModal();
  }
}

function createProjectListener() {
  const createProjectBtn = document.getElementById('create-project-btn');
  createProjectBtn.onclick = createProject;
}

function createProject() {
  const projectsNode = document.getElementById('projectsNode');
  const addProjectBtn = document.createElement('button');
  addProjectBtn.setAttribute('id', 'add-project-btn');
  const newProject = document.createElement('input');
  newProject.setAttribute('type', 'text');
  newProject.setAttribute('id', 'new-project');
  addProjectBtn.append('ADD ');
  projectsNode.append(newProject, addProjectBtn);
  removeProjectListener();
  newProject.focus();
  addProject();
}

function removeProjectListener() {
  const createProjectBtn = document.getElementById('create-project-btn');
  createProjectBtn.onclick = null;
}

function addProject() {
  const projectsNode = document.getElementById('projectsNode');
  const newProject = document.getElementById('new-project');
  const addProjectBtn = document.getElementById('add-project-btn');
  addProjectBtn.addEventListener('click', () => {
    if (newProject.value && !(projects.has(newProject.value))) {
      projects.add(newProject.value);
      const projectNode = document.createElement('div');
      projectNode.append(`${newProject.value}`);
      projectNode.setAttribute('id', `project-${newProject.value}`);
      projectNode.classList.add('created-project', 'filter');
      projectsNode.append(projectNode);
    }
    newProject.remove();
    addProjectBtn.remove();
    createProjectListener();
    projectFilterListener();
  })
}

function getOptions() {
  const optionNodes = document.querySelectorAll('.project-option');
  let existingOptions = [];
  Array.from(optionNodes).forEach(option => existingOptions.push(option.innerText));
  return existingOptions;
}

function createProjectOptions() {
  const taskProject = document.getElementById('task-project');
  const options = getOptions();
  projects.forEach(project => {
    if (!options.includes(project)) {
      let projectOption = document.createElement('option');
      projectOption.classList.add('project-option');
      projectOption.setAttribute('value', project);
      projectOption.append(project);
      taskProject.append(projectOption);
    }
  })
}

function removeTaskListener() {
  const removeBtns = document.querySelectorAll('.remove-task');
  removeBtns.forEach(removeBtn => {
    removeBtn.addEventListener('click', e => {
      removeTask(e.target.parentElement);
      let task = tasks.find(obj => obj.id == e.target.dataset.id);
      tasks = tasks.filter(ele => ele !== task);
    })
  })
}

function removeTask(node) {
  node.remove();
}

function assignTaskId() {
  let ids = Array.from(tasks, task => task.id);
  let highestId = Math.max(...ids);
  if (highestId <= 0) return 1;
  else return highestId + 1;
}

function taskTemplate(task) {
  const li = document.createElement('li');
  const label = document.createElement('label');
  const input = document.createElement('input');
  input.setAttribute('type', 'checkbox');
  const img = document.createElement('img');
  const div = document.createElement('div');

  const checkbox1 = input.cloneNode();
  checkbox1.setAttribute('id', `title-cb-${task.id}`);
  checkbox1.setAttribute('data-id', `${task.id}`);
  const checkboxImg = img.cloneNode();
  checkboxImg.src = check;
  checkboxImg.classList.add('faded', 'checkmark');
  const templateTitle = div.cloneNode();
  templateTitle.append(`${task.title}`);
  const templateProject = div.cloneNode();
  templateProject.append(`${task.project}`);
  const titleLabel = label.cloneNode();
  titleLabel.setAttribute('for', `title-cb-${task.id}`);
  titleLabel.setAttribute('data-id', `${task.id}`);
  titleLabel.classList.add('title-label');
  titleLabel.append(checkbox1, checkboxImg, templateTitle, templateProject);

  const checkbox2 = input.cloneNode();
  checkbox2.setAttribute('id', `star-cb-${task.id}`);
  checkbox2.setAttribute('data-id', `${task.id}`);
  const starImg = img.cloneNode();
  starImg.src = star;
  starImg.classList.add('faded', 'star');
  if (task.isPriority) {
    checkboxTicked(starImg);
    checkbox2.setAttribute('checked', true);
  }
  if (task.completed) {
    checkboxTicked(checkboxImg);
    checkbox1.setAttribute('checked', true);
  }
  const starLabel = label.cloneNode();
  starLabel.setAttribute('for', `star-cb-${task.id}`);
  starLabel.append(checkbox2, starImg);

  const infoImg = img.cloneNode();
  infoImg.src = info;
  infoImg.setAttribute('data-id', `${task.id}`);
  infoImg.setAttribute('data-type', 'info');
  infoImg.classList.add('get-id');
  const templateDate = div.cloneNode();
  templateDate.append(`${task.dueDate}`);
  const editImg = img.cloneNode();
  editImg.src = edit;
  editImg.setAttribute('data-id', `${task.id}`);
  editImg.setAttribute('data-type', 'edit');
  editImg.classList.add('get-id');
  const deleteImg = img.cloneNode();
  deleteImg.setAttribute('class', 'remove-task');
  deleteImg.setAttribute('data-id', `${task.id}`);
  deleteImg.src = bin;

  li.setAttribute('id', `${task.id}`);
  li.append(titleLabel, starLabel, infoImg, templateDate, editImg, deleteImg);
  
  // appendTaskList(li);
  return li;
}

function appendTaskList(task) {
  const ul = document.querySelector('.tasks ul');
  ul.append(task);
  // initializeListeners();
  removeTaskListener();
  editAndInfoListeners();
  checkboxListeners();
}

function checkboxListeners() {
  const checkboxes = document.querySelectorAll('.tasks input[type="checkbox"]');
  checkboxes.forEach(checkbox => {
    checkbox.addEventListener('click', e => {
      if (e.target.checked) {
        checkboxTicked(e.target.nextSibling);
        confirmChoice(e);
      } else {
        checkboxUnticked(e.target.nextSibling);
        removeChoice(e);
      }
    })
  })
}

function confirmChoice(e) {
  let task = tasks.find(obj => obj.id == e.target.dataset.id);
  if (e.target.id.includes('star')) {
    task.isPriority = true;
  }
  if (e.target.id.includes('title')) {
    task.completed = true;
  }
}

function removeChoice(e) {
  let task = tasks.find(obj => obj.id == e.target.dataset.id);
  if (e.target.id.includes('star')) {
    task.isPriority = false;
  }
  if (e.target.id.includes('title')) {
    task.completed = false;
  }
}

function checkboxTicked(node) {
  node.classList.remove('faded');
  if (Array.from(node.classList).includes('star')) {
    node.classList.add('yellow-star');
  }
  if (Array.from(node.classList).includes('checkmark')) {
    node.classList.add('green-checkmark');
  }
}

function checkboxUnticked(node) {
  node.classList.add('faded');
  if (Array.from(node.classList).includes('star')) {
    node.classList.remove('yellow-star');
  }
  if (Array.from(node.classList).includes('checkmark')) {
    node.classList.remove('green-checkmark');
  }
}

function editAndInfoListeners() {

  const nodes = document.querySelectorAll('.get-id');
  nodes.forEach(node => {
    node.addEventListener('click', showModal)
  })
}

function showModal(e) {
  let task = tasks.find(obj => obj.id == e.target.dataset.id);
  if (e.target.dataset.type === 'info') {
    const infoModal = document.getElementById('info-modal-container');
    const title = document.getElementById('info-title');
    const dueDate = document.getElementById('info-date');
    const priority = document.getElementById('info-priority');
    const description = document.getElementById('info-description');
    const project = document.getElementById('info-project');
    title.append(task.title);
    dueDate.append(task.dueDate);
    priority.append(task.isPriority ? 'Yes' : 'No');
    description.append(task.description);
    project.append(task.project);
    infoModal.style.display = 'block';
    const closeInfoModal = document.getElementById('close-info-modal');
    closeInfoModal.onclick = hideInfoModal;
  }
  if (e.target.dataset.type === 'edit') {
    const editId = document.getElementById('edit-id');
    editId.innerText = task.id;
    const editModal = document.getElementById('edit-modal-container');
    const titleEdit = document.getElementById('edit-title');
    titleEdit.value = task.title;
    const dueDateEdit = document.getElementById('edit-date');
    dueDateEdit.value = task.dueDate;
    const priorityEdit = document.getElementById('edit-priority');
    if (task.isPriority) {
      priorityEdit.setAttribute('checked', true);
    } else {
      priorityEdit.setAttribute('checked', false);
      priorityEdit.removeAttribute('checked');
    }
    const descriptionEdit = document.getElementById('edit-description');
    descriptionEdit.value = task.description;
    // const projectEdit = document.getElementById('edit-project');
    editProjectOptions();
    preselectTaskProject(task);
    editModal.style.display = 'block';
    const closeEditModal = document.getElementById('close-edit-modal');
    titleEdit.focus();
    closeEditModal.onclick = hideEditModal;
  };
}

function hideEditModal() {
  const editModal = document.getElementById('edit-modal-container');
  editModal.style.display = 'none';
}

function hideInfoModal() {
  const title = document.getElementById('info-title');
  const dueDate = document.getElementById('info-date');
  const priority = document.getElementById('info-priority');
  const description = document.getElementById('info-description');
  const project = document.getElementById('info-project');
  title.innerText = null;
  dueDate.innerText = null;
  priority.innerText = null;
  description.innerText = null;
  project.innerText = null;
  const infoModal = document.getElementById('info-modal-container');
  infoModal.style.display = 'none';
}

function editProjectOptions() {
  const editProject = document.getElementById('edit-project');
  const option = document.createElement('option');
  projects.forEach(project => {
    const editProjectOption = option.cloneNode();
    editProjectOption.classList.add('edit-project-option');
    editProjectOption.innerText = project;
    editProjectOption.value = project;
    const existingOptions = [];
    Array.from(editProject.children).forEach(child => {
      if (child.value) {
        existingOptions.push(child.value);
      }
    });
    if (!existingOptions.includes(project)) {
      editProject.append(editProjectOption);
    }

  });
}

function preselectTaskProject(task) {
  let optionSet = false;
  const editProject = document.getElementById('edit-project');
  Array.from(editProject.children).forEach(child => {
    if (child.value != task.project) {
      child.removeAttribute('selected', true);
    }
    if (child.value == task.project) {
      child.setAttribute('selected', true);
      optionSet = true;
    } 
  
  })
  if (!optionSet) {
    const editDefaultProject = document.getElementById('edit-default-project');
    editDefaultProject.setAttribute('selected', true);
  }
}

function updateTaskListener() {
  const updateTaskBtn = document.getElementById('update-task');
  updateTaskBtn.onclick = updateTask;
}

function updateTask() {
  const taskId = document.getElementById('edit-id');
  const editedTitle = document.getElementById('edit-title');
  const editedDate = document.getElementById('edit-date');
  const editedPriority = document.getElementById('edit-priority');
  const editedProject = document.getElementById('edit-project');
  const editedDescription = document.getElementById('edit-description');

  let task = tasks.find(obj => obj.id == taskId.innerText);
  if (editedTitle.value) task.title = editedTitle.value;
  if (editedDate.value) task.dueDate = editedDate.value;
  task.isPriority = editedPriority.checked;
  if (editedProject.value) task.project = editedProject.value;
  if (editedDescription.value) task.description = editedDescription.value;
  replaceTask(task);
  hideEditModal();
}

function replaceTask(task) {
  const taskToUpdate = document.getElementById(`${task.id}`);
  taskToUpdate.replaceWith(taskTemplate(task));
  initializeListeners();
}

function importantFilterListener() {
  const importantFilter = document.getElementById('important-filter');
  importantFilter.onclick = filterByImportant;
}

function filterByImportant() {
  clearTasks();
  displayAllTasks();
  const tasksDisplayed = document.querySelectorAll('.tasks ul li');
  const filterCriteria = document.getElementById('filter-criteria');
  filterCriteria.innerText = 'Important';
  tasksDisplayed.forEach(taskDisplayed => {
    let currentTask = tasks.find(task => task.id == taskDisplayed.id);
    if (!currentTask.isPriority) taskDisplayed.remove();
  });
}

function homeFilterListener() {
  const homeFilter = document.getElementById('home-filter');
  homeFilter.onclick = displayAllTasks;
}

function displayAllTasks() {
  const filterCriteria = document.getElementById('filter-criteria');
  filterCriteria.innerText = 'Home';
  clearTasks();
  tasks.forEach(task => {
    appendTaskList(taskTemplate(task));
  })
}

function clearTasks() {
  const ul = document.querySelector('.tasks ul');
  Array.from(ul.children).forEach(child => child.remove());
}

function todayFilterListener() {
  const todayFilter = document.getElementById('today-filter');
  todayFilter.onclick = filterByToday;
}

function filterByToday() {
  clearTasks();
  displayAllTasks();
  const filterCriteria = document.getElementById('filter-criteria');
  filterCriteria.innerText = 'Today';
  let today = new Date();
  const todaysDate = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`

  const tasksDisplayed = document.querySelectorAll('.tasks ul li');
  tasksDisplayed.forEach(taskDisplayed => {
    let currentTask = tasks.find(task => task.id == taskDisplayed.id);
    if (currentTask.dueDate != todaysDate) taskDisplayed.remove();
  });
}

function projectFilterListener() {
  const projectFilters = document.querySelectorAll('.created-project');
  projectFilters.forEach(projectFilter => {
    projectFilter.addEventListener('click', e => {
      clearTasks();
      displayAllTasks();
      const tasksDisplayed = document.querySelectorAll('.tasks ul li');
      const filterCriteria = document.getElementById('filter-criteria');
      filterCriteria.innerText = `${e.target.innerText}`;
      tasksDisplayed.forEach(taskDisplayed => {
        let currentTask = tasks.find(task => task.id == taskDisplayed.id);
        if (currentTask.project != e.target.innerText) taskDisplayed.remove();
      });
    })
  })
}

function taskHeaderListener() {
  const taskHeaders = document.querySelectorAll('.task-header');
  taskHeaders.forEach(taskHeader => taskHeader.addEventListener('click', e => {
    let key = e.target.dataset.key;
    // console.log(e.target.classList);
    if ((Array.from(e.target.classList)).includes('descending')) {
      tasks.sort((a, b) => {
        if (a[`${key}`] < b[`${key}`]) return -1;
        if (b[`${key}`] < a[`${key}`]) return 1;
      })
      e.target.classList.remove('descending');
      e.target.classList.add('ascending');
    }
    else if ((Array.from(e.target.classList)).includes('ascending')) {
      tasks.sort((a, b) => {
        if (a[`${key}`] < b[`${key}`]) return 1;
        if (b[`${key}`] < a[`${key}`]) return -1;
      })
      e.target.classList.remove('ascending');
      e.target.classList.add('descending');
    }
    clearTasks();
    tasks.forEach(task => {
    appendTaskList(taskTemplate(task));
    })
    removeTaskListener();
    editAndInfoListeners();
    checkboxListeners();

  }))
}




let task1 = {
            id: 1,
            title: 'Wash car',
            dueDate: '2022-10-22',
            isPriority: false,
            description: 'Wax and polish',
            project: '',
            completed: true,
            };

let task2 = {
            id: 2,
            title: 'Paint fence',
            dueDate: '2022-10-24',
            isPriority: true,
            description: 'Give 2 coats',
            project: 'Home',
            completed: false,
        };

let task3 = {
          id: 3,
          title: 'Walk dog',
          dueDate: '2003-03-23',
          isPriority: false,
          description: 'Go to beach',
          project: '',
          completed: true,
          };
let task4 = {
          id: 47,
          title: 'Weight training',
          dueDate: '2022-10-22',
          isPriority: false,
          description: 'Chest and shoulders',
          project: 'Exercise',
          completed: false,
        };



tasks.push(task1, task2, task3, task4);
appendTaskList(taskTemplate(tasks[0]));
appendTaskList(taskTemplate(tasks[1]));
appendTaskList(taskTemplate(tasks[2]));
appendTaskList(taskTemplate(tasks[3]));


initializeListeners();

// console.table(tasks);

// tasks.sort((a, b) => {
//   if (a.title < b.title) return -1;
//   if (b.title < a.title) return 1;
// })

// console.table(tasks);

// tasks.sort((a, b) => {
//   if (a.completed < b.completed) return -1;
//   if (b.completed < a.completed) return 1;
// })
// console.table(tasks);

// tasks.sort((a, b) => {
//   if (a.dueDate < b.dueDate) return -1;
//   if (b.dueDate < a.dueDate) return 1;
// })
// console.table(tasks);

// tasks.sort((a, b) => {
//   if (a.project < b.project) return -1;
//   if (b.project < a.project) return 1;
// })
// console.table(tasks);
// tasks.sort((a, b) => {
//   if (a.isPriority < b.isPriority) return -1;
//   if (b.isPriority < a.isPriority) return 1;
// })
// console.table(tasks);