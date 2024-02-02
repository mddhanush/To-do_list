const inputBox = document.getElementById("input-box")
const listContainer = document.getElementById("list-container")

function performTask() {
    // Check if the input box is empty
    if (inputBox.value === '') {
        alert("Please enter a task");
    } else {
        // Create a new list item
        const listItem = document.createElement("li");

        // Set the inner HTML of the list item to the value of the input box
        listItem.innerHTML = inputBox.value;

        // Append the list item to the list container
        listContainer.appendChild(listItem);

        // Create a span element for the delete button
        const span = document.createElement("span");

        // Set the inner HTML of the span element to the delete icon 
        span.innerHTML = "\u00d7";

        // Append the span element to the list item
        listItem.appendChild(span);

    }
    // Clear the input box
    inputBox.value = '';
    dataSave()
}

listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        dataSave()
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        dataSave()
    }
}, false);



// Function to load the data from local storage
function dataSave() {
    localStorage.setItem("data", listContainer.innerHTML);
}


// Function to load the data from local storage
function dataLoad() {
    listContainer.innerHTML = localStorage.getItem("data");
}

dataLoad();
