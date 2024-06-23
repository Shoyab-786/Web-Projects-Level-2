// Initializing...
console.log("Javascript Initiallizing");

// Creating Varibles...
let listContainer = document.querySelector('.listContainer');
let addBtn = document.querySelector('.addBtn');
let userTask = document.querySelector('#userTask');
let notification = document.querySelector('.notification');

// Function To Show Notification...
let showNotification = () => {
    notification.classList.add('show');
    setTimeout(() => {
        notification.classList.remove('show');
    }, 2500);
}

// Event Listener For Adding Task...
addBtn.addEventListener('click', () => {

    let taskValue = userTask.value;

    if (taskValue === '') {
        notification.innerHTML = "Task Can't Be Empty !";
        notification.style.color = "red";
        showNotification();
    }
    else {
        // Creating Element For Adding Task...
        let li = document.createElement('li');
        let div = document.createElement('div');
        listContainer.appendChild(li);
        div.innerHTML = taskValue;        
        li.appendChild(div);
        let span = document.createElement('span');
        // Creating Cross Icon...
        span.innerHTML = "\u00d7";
        li.appendChild(span);

        saveData();

        notification.innerHTML = "Task Added Successfully.";
        notification.style.color = "green";
        showNotification();
        userTask.value = '';
    }
})

// Event Listener For Line Through Or  Removing Task...
listContainer.addEventListener('click', (e) => {
    // line Throughing...
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
        notification.innerHTML = "Task Completed Successfully.";
        notification.style.color = "green";
        showNotification();
    }
    // Removing Task...
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
        notification.innerHTML = "Task Removed Successfully.";
        notification.style.color = "green";
        showNotification();
    }
}, false)

// Function To Saved Task In Local Storage...
let saveData = () => {
    localStorage.setItem('Data', listContainer.innerHTML);
}

// Function To Show Saved Tasks...
let showData = () => {
    listContainer.innerHTML = localStorage.getItem('Data');
}
showData();