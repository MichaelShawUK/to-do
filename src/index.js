import './style.css';
import test from './test.js';

test();

function openTaskModalListener() {
  const createTask = document.querySelector('.create-task');
  createTask.onclick = displayTaskModal;
}

function hideTaskModalListener() {
  const cancelTaskModal = document.getElementById('cancel-task-btn');
  cancelTaskModal.onclick = hideTaskModal;
}

function displayTaskModal() {
  const addTaskModal = document.getElementById('add-task-modal');
  addTaskModal.style.display = 'block';
}

function hideTaskModal() {
  const addTaskModal = document.getElementById('add-task-modal');
  addTaskModal.style.display = 'none';
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

  let task = {
    title: taskTitle.value,
    dueDate: taskDueDate.value,
    isPriority: taskPriority.checked,
    description: taskDescription.value,
  }
  hideTaskModal();
  addTask(task);
  taskTitle.value = null;
  taskDueDate.value = null;
  taskPriority.checked = null;
  taskDescription.value = null;
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

openTaskModalListener();
hideTaskModalListener();
addTaskListener();
