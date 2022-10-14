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
const tasks = [];

function initializeListeners() {
  openTaskModalListener();
  hideTaskModalListener();
  addTaskListener();
  clickOutsideModal();
  createProjectListener();
  removeTaskListener();
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
  const addTaskModal = document.querySelector('.modal-container');
  const closeModal = document.getElementById('close-modal');
  addTaskModal.style.display = 'block';
  createProjectOptions();
  const taskTitle = document.getElementById('task-title');
  taskTitle.focus();
  closeModal.onclick = hideTaskModal;
}

function hideTaskModal() {
  const addTaskModal = document.querySelector('.modal-container');
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
  }
  console.log(task);
  if (task.title && task.dueDate) {
    tasks.push(task);
    taskTemplate(task);
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

function clickOutsideModal() {
  const modalContainer = document.querySelector('.modal-container');
  modalContainer.onclick = e => {
    if (e.target.parentElement.tagName === 'BODY') hideTaskModal();
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
      projectNode.append(`/ / ${newProject.value}`);
      projectsNode.append(projectNode);
    }
    newProject.remove();
    addProjectBtn.remove();
    createProjectListener();
  })
}

function getOptions() {
  const optionNodes = document.querySelectorAll('option');
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
  const checkboxImg = img.cloneNode();
  checkboxImg.src = check;
  const templateTitle = div.cloneNode();
  templateTitle.append(`${task.title}`);
  const titleLabel = label.cloneNode();
  titleLabel.setAttribute('for', `title-cb-${task.id}`);
  titleLabel.append(checkbox1, checkboxImg, templateTitle);

  const checkbox2 = input.cloneNode();
  checkbox2.setAttribute('id', `star-cb-${task.id}`);
  const starImg = img.cloneNode();
  starImg.src = star;
  const starLabel = label.cloneNode();
  starLabel.setAttribute('for', `star-cb-${task.id}`);
  starLabel.append(checkbox2, starImg);

  const infoImg = img.cloneNode();
  infoImg.src = info;
  const templateDate = div.cloneNode();
  templateDate.append(`${task.dueDate}`);
  const editImg = img.cloneNode();
  editImg.src = edit;
  const deleteImg = img.cloneNode();
  deleteImg.src = bin;

  li.append(titleLabel, starLabel, infoImg, templateDate, editImg, deleteImg);
  
  appendTaskList(li);
}

function appendTaskList(task) {
  const ul = document.querySelector('.tasks ul');
  ul.append(task);
}

initializeListeners();

taskTemplate({id: 1, title: 'Wash car', dueDate: '01 Jan 2020'});
taskTemplate({id: 72, title: 'Paint fence', dueDate: '02 Feb 2020'});
