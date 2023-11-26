
//getting all the html elements 
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const taskCount = document.getElementById("task-count");
var taskCompleted = document.getElementById("task-completed");
var taskcount = 0;
var taskcompleted = 0;


//function to add the task in the list
function addTask(){
    if(inputBox.value === ''){           
        alert("You must write something");   
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
        taskcount++;
    }
    inputBox.value = "";
    taskCount.innerHTML = `Task Left:${taskcount}`;
    saveData();

}
//delete and marking the task
listContainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked"); 
        taskcompleted++;
        taskCompleted.innerHTML = `Task Completed:${taskcompleted}`;
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        taskcount--;
        if(taskcount<=0){
            taskcount  = 0;
        }
        taskCount.innerHTML = `Task Left:${taskcount}`;
    }     
    if(taskcount===0){
        taskcompleted = taskcount;
        taskCompleted.innerHTML = `Task Completed:${taskcompleted}`;
    }
    saveData();
},false);

//saving the data in local storage
function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}

//fetching the data from the local storage
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();

