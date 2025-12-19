$(function() {

    // Load the tasks when the page opens.
    loadTasks();

    // Click the button to create a new task.
    $("#newTaskBtn").on("click", createTask);

    // TASK MANAGEMENT
// Create a new task
function createTask() {
    const taskText = prompt("Write a new task:");
    if (!taskText || taskText.trim() === "") return;
    const $taskDiv = $("<div></div>");
    const $textSpan = $("<span></span>").text(taskText.trim());
    const $removeBtn = $("<span></span>")
        .text("✖")
        .addClass("remove-btn");
    // Click the remove button.
    $removeBtn.on("click", function() {
        removeTask($taskDiv);
    });
    $taskDiv.append($textSpan, $removeBtn);
    // Add to the top of the list
    $("#ft_list").prepend($taskDiv);
    saveTasksToCookie();
}

// Remove task
function removeTask($taskDiv) {
    if (confirm("Would you like to remove this task?")) {
        $taskDiv.remove();
        saveTasksToCookie();
    }
}

// Save tasks to cookie
function saveTasksToCookie() {
    const tasks = [];
    $("#ft_list div").each(function() {
        // Only retrieve the text from the task, ignoring the "X" button.
        const text = $(this).children("span:first").text();
        tasks.push(text);
    });
    document.cookie = "tasks=" + encodeURIComponent(JSON.stringify(tasks)) + "; path=/";
}

// Load cookie tasks
function loadTasks() {
    const cookie = document.cookie
        .split("; ")
        .find(row => row.startsWith("tasks="));

    if (!cookie) return;

    const tasks = JSON.parse(decodeURIComponent(cookie.split("=")[1]));
    tasks.forEach(task => addTaskToDOM(task));
}

// Add task to DOM (used when loading from cookie)
function addTaskToDOM(taskText) {
    const $taskDiv = $("<div></div>");
    const $textSpan = $("<span></span>").text(taskText);
    const $removeBtn = $("<span></span>")
        .text("✖")
        .addClass("remove-btn");

    $removeBtn.on("click", function() {
        removeTask($taskDiv);
    });

    $taskDiv.append($textSpan, $removeBtn);

    $("#ft_list").prepend($taskDiv);
}

});

/*
// load tasks when window loads
window.onload = loadTasks;

document.getElementById("newTaskBtn").addEventListener("click", createTask);

// TASK MANAGEMENT
// Create a new task
function createTask() {
    const taskText = prompt("Write a new task:");

    if (!taskText || taskText.trim() === "") return;

    const ftList = document.getElementById("ft_list");

    const taskDiv = document.createElement("div");

    const textSpan = document.createElement("span");
    textSpan.textContent = taskText.trim();

    const removeBtn = document.createElement("span");
    removeBtn.textContent = "✖";
    removeBtn.className = "remove-btn";

    // Button to remove task
    removeBtn.onclick = function () {
        removeTask(taskDiv);
    };

    taskDiv.appendChild(textSpan);
    taskDiv.appendChild(removeBtn);

    // adiciona no topo da lista
    ftList.prepend(taskDiv);

    saveTasksToCookie();
}

// Add task to DOM (used when loading from cookie)
function removeTask(taskElement) {
    if (confirm("Would you like to remove this task?")) {
        taskElement.remove();
        saveTasksToCookie();
    }
}

// COOKIES

// save tasks to cookie
function saveTasksToCookie() {
    const tasks = [];
    const taskDivs = document.querySelectorAll("#ft_list div");

    taskDivs.forEach(div => {
        tasks.push(div.textContent);
    });

    document.cookie = "tasks=" + encodeURIComponent(JSON.stringify(tasks)) + "; path=/";
}

// load tasks from cookie
function loadTasks() {
    const cookie = document.cookie 
        .split("; ")
        .find(row => row.startsWith("tasks="));

    if (!cookie) return;

    const tasks = JSON.parse(decodeURIComponent(cookie.split("=")[1])); // array of task strings

    tasks.forEach(task => {
        addTaskToDOM(task);
    });
}
*/