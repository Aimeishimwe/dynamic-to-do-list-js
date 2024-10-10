// Wait for the DOM content to be fully loaded before running the script
document.addEventListener('DOMContentLoaded', function onDOMLoaded() {
    // Select the "Add Task" button and store it in a constant named addButton
    const addButton = document.getElementById('add-task-btn');
    // Select the input field where users enter tasks and store it in a constant named taskInput
    const taskInput = document.getElementById('task-input');
    // Select the unordered list where tasks will be displayed and store it in a constant named taskList
    const taskList = document.getElementById('task-list');

    // Define a function named addTask to handle adding new tasks
    function addTask() {
        // Retrieve and trim the value from the task input field
        const taskText = taskInput.value.trim();

        // Check if the taskText is empty
        if (taskText === "") {
            alert('Please enter a task');
            return; // Exit the function if no task is provided
        }

        // Create a new <li> element to represent the task
        const listItem = document.createElement('li');
        listItem.textContent = taskText;

        // Create a new button element for removing the task
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.className = 'remove-btn';

        // Add an onclick event to the remove button to remove the task from the list
        removeButton.onclick = function() {
            taskList.removeChild(listItem);
        };

        // Append the remove button to the <li> element
        listItem.appendChild(removeButton);
        // Append the <li> element to the task list
        taskList.appendChild(listItem);

        // Clear the input field after adding the task
        taskInput.value = '';
    }

    // Add an event listener to the "Add Task" button to call addTask when clicked
    addButton.addEventListener('click', addTask);

    // Allow tasks to be added by pressing the "Enter" key in the input field
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
