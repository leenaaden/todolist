// Function to add a new task
function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskText = taskInput.value.trim();

  // Check if the input is not empty
  if (taskText === '') {
      alert('Please enter a task.');
      return;
  }

  // Create a new list item for the task
  const taskItem = document.createElement('li');
  taskItem.textContent = taskText;

  // Create a delete button for each task
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.className = 'delete';
  deleteButton.onclick = function() {
      deleteTask(taskItem);
  };

  // Append the delete button to the task item
  taskItem.appendChild(deleteButton);

  // Add the task item to the list
  document.getElementById('taskList').appendChild(taskItem);

  // Clear the input
  taskInput.value = '';
}

// Function to delete a task
function deleteTask(taskItem) {
  taskItem.remove();
}
