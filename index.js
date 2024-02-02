const inputBox = document.getElementById("input-box")
const listContainer = document.getElementById("list-container")

function performTask() {
    if (inputBox.value === '') {
        alert("Please enter a task");
    } else {
        const listItem = document.createElement("li");
        listItem.innerHTML = inputBox.value;
        listContainer.appendChild(listItem);



        const span = document.createElement("span");
        span.innerHTML = "\u00d7";
        listItem.appendChild(span);


    }
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

function dataSave() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function dataLoad() {
    listContainer.innerHTML = localStorage.getItem("data");
}

dataLoad();
