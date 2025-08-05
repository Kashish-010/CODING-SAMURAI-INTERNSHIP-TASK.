// ========== To-Do List Functionality ==========
const inputbox = document.getElementById("inputb");
const listcont = document.getElementById("list-container");

function addTask() {
    if (inputbox && inputbox.value === '') {
        alert("You must write something to add!");
    } else if (inputbox) {
        let li = document.createElement("li");
        li.innerHTML = inputbox.value;
        listcont.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00D7";
        li.appendChild(span);
        inputbox.value = "";
    }
}

if (listcont) {
    listcont.addEventListener("click", function (e) {
        if (e.target.tagName === "LI") {
            e.target.classList.toggle("checked");
        } else if (e.target.tagName === "SPAN") {
            e.target.parentElement.remove();
            localStorage.setItem("data",listcont.innerHTML);
        }
    });
}

// ===================== Theme Handling =====================
const themes = ['Blue', 'Cute', 'Dark', 'Light', 'Nature', 'Space', 'Summer'];

// Apply theme instantly (preview only)
function setTheme(theme) {
    themes.forEach(t => document.body.classList.remove(t));
    document.body.classList.add(theme);
  localStorage.setItem("selectedTheme", theme);
}

// Apply saved theme on load
function showTheme() {
    const savedTheme = localStorage.getItem("selectedTheme");
    if (savedTheme) {
        themes.forEach(t => document.body.classList.remove(t));
        document.body.classList.add(savedTheme);
    }
}

document.addEventListener("DOMContentLoaded", showTheme);

// ===================== Save Notes Logic =====================

function saveList(){

    localStorage.setItem("data",listcont.innerHTML);
    alert("File saved");
}
 function showList(){
    listcont.innerHTML=localStorage.getItem("data");
 }  
 showList();