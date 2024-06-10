document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('task-input');
    const tasksList = document.getElementById('tasks-list');

    // Function to add a new task
    function addTask() {
        const taskText = taskInput.value.trim();
        if (!taskText) return;

        const listItem = document.createElement('li');
        listItem.textContent = taskText;

        // Add a checkbox to mark tasks as completed
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.addEventListener('change', () => {
            if (checkbox.checked) {
                listItem.classList.add('completed');
            } else {
                listItem.classList.remove('completed');
            }
        });
        listItem.appendChild(checkbox);

        // Add delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => {
            tasksList.removeChild(listItem);
        });
        listItem.appendChild(deleteButton);

        tasksList.appendChild(listItem);

        // Clear input field after adding a task
        taskInput.value = '';
    }

    // Function to clear completed tasks
    function clearCompletedTasks() {
        const completedItems = document.querySelectorAll('#tasks-list.completed');
        completedItems.forEach(item => tasksList.removeChild(item));
    }
});
