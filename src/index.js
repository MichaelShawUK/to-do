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
  clickOutsideTaskModal();
  clickOutsideInfoModal();
  createProjectListener();
  removeTaskListener();
  checkboxListeners();
  editAndInfoListeners();

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
  checkboxImg.classList.add('faded', 'checkmark');
  const templateTitle = div.cloneNode();
  templateTitle.append(`${task.title}`);
  const templateProject = div.cloneNode();
  templateProject.append(`${task.project}`);
  const titleLabel = label.cloneNode();
  titleLabel.setAttribute('for', `title-cb-${task.id}`);
  titleLabel.classList.add('title-label');
  titleLabel.append(checkbox1, checkboxImg, templateTitle, templateProject);

  const checkbox2 = input.cloneNode();
  checkbox2.setAttribute('id', `star-cb-${task.id}`);
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
  deleteImg.src = bin;

  li.append(titleLabel, starLabel, infoImg, templateDate, editImg, deleteImg);
  
  appendTaskList(li);
}

function appendTaskList(task) {
  const ul = document.querySelector('.tasks ul');
  ul.append(task);
  initializeListeners();
}

function checkboxListeners() {
  const checkboxes = document.querySelectorAll('.tasks input[type="checkbox"]');
  checkboxes.forEach(checkbox => {
    checkbox.addEventListener('click', e => {
      if (e.target.checked) {
        checkboxTicked(e.target.nextSibling);
      } else {
        checkboxUnticked(e.target.nextSibling);
      }
    })
  })
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
  // console.log(e.target.dataset.id);
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
    const editModal = document.getElementById('edit-modal-container');
    const titleEdit = document.getElementById('edit-title');
    titleEdit.value = task.title;
    const dueDateEdit = document.getElementById('edit-date');
    dueDateEdit.value = task.dueDate;
    const priorityEdit = document.getElementById('edit-priority');
    if (task.isPriority) {
      priorityEdit.setAttribute('checked', true);
    } else priorityEdit.removeAttribute('checked');
    const descriptionEdit = document.getElementById('edit-description');
    descriptionEdit.value = task.description;
    const projectEdit = document.getElementById('edit-project');
    editModal.style.display = 'block';
    const closeEditModal = document.getElementById('close-edit-modal');
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


let task1 = {
            id: 1,
            title: 'Wash car',
            dueDate: '2001-01-21',
            isPriority: false,
            description: 'Wax and polish',
            project: '',
            completed: true,
            };

let task2 = {
            id: 2,
            title: 'Paint fence',
            dueDate: '2002-02-22',
            isPriority: true,
            description: 'Give 2 coats',
            project: 'Home',
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
          dueDate: '2004-04-24',
          isPriority: false,
          description: 'Chest and shoulders',
          project: 'Exercise',
          };



tasks.push(task1, task2, task3, task4);
taskTemplate(tasks[0]);
taskTemplate(tasks[1]);
taskTemplate(tasks[2]);
taskTemplate(tasks[3]);

initializeListeners();
