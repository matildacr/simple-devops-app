document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('add-task-button');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    addButton.addEventListener('click', () => {
        const taskText = taskInput.value.trim();

        if (taskText !== "") {
            const listItem = document.createElement('li');
            listItem.textContent = taskText;
            taskList.appendChild(listItem);
            taskInput.value = ""; // Limpiar el input
        }
    });
});
