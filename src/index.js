import './style.css';
import test from './test.js';

test();

const projects = new Set();

function initializeListeners() {
  openTaskModalListener();
  hideTaskModalListener();
  addTaskListener();
  clickOutsideModal();
  createProjectListener();
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
    title: taskTitle.value,
    dueDate: taskDueDate.value,
    isPriority: taskPriority.checked,
    description: taskDescription.value,
    project: taskProject.value,
  }
  hideTaskModal();
  if (task.title && task.dueDate) addTask(task);
  
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

function addTask(task) {
  const taskView = document.getElementById('task-view');
  const taskNode = document.createElement('div');
  taskNode.setAttribute('class', 'task');

  const checkBtn = document.createElement('button');
  checkBtn.append('#');
  const deleteBtn = document.createElement('button');
  deleteBtn.append('X');
  const taskNodeTitle = document.createElement('div');
  taskNodeTitle.setAttribute('class', 'task-title');
  taskNodeTitle.append(task.title);
  const taskNodeDueDate = document.createElement('div');
  taskNodeDueDate.setAttribute('class', 'task-due-date');
  taskNodeDueDate.append(task.dueDate);

  taskNode.append(checkBtn, taskNodeTitle, taskNodeDueDate, deleteBtn);
  taskView.append(taskNode);
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
  addProjectBtn.append('ADD PROJECT');
  projectsNode.append(newProject, addProjectBtn);
  removeProjectListener();
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
      projectOption.append(project);
      taskProject.append(projectOption);
    }
  })
}

initializeListeners();
