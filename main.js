function getToDoData(){
    var taskName = document.getElementById("inputTaskName").value;
    var taskTime = document.getElementById("inputEstimateTime").value;
    taskTime = parseInt(taskTime);
    var taskPriority = document.getElementById("taskPriority").value;
    var card = document.getElementById("taskCard");
    var cloneTaskCard = card.cloneNode(true);

    var cardTitle = cloneTaskCard.getElementsByTagName('span').titleTask;

    cardTitle.innerHTML = taskName;

    var cardTime = cloneTaskCard.getElementsByTagName('span').timeTask;
    
    cardTime.innerHTML = taskTime;
    
    var cardPriority = cloneTaskCard.getElementsByTagName('span').priority;
    
    cardPriority.innerHTML = taskPriority;

    cloneTaskCard.classList.remove("card__style");

    var tableSectionToDo = document.getElementById("tableSectionToDo");

    tableSectionToDo.appendChild(cloneTaskCard);
}

function getInProgressData(){
    var taskName = document.getElementById("inputTaskName").value;
    var taskTime = document.getElementById("inputEstimateTime").value;
    taskTime = parseInt(taskTime);
    var taskPriority = document.getElementById("taskPriority").value;
    var card = document.getElementById("taskCard");
    var cloneTaskCard = card.cloneNode(true);

    var cardTitle = cloneTaskCard.getElementsByTagName('span').titleTask;

    cardTitle.innerHTML = taskName;

    var cardTime = cloneTaskCard.getElementsByTagName('span').timeTask;
    
    cardTime.innerHTML = taskTime;
    
    var cardPriority = cloneTaskCard.getElementsByTagName('span').priority;
    
    cardPriority.innerHTML = taskPriority;

    cloneTaskCard.classList.remove("card__style");

    var tableSectionInProgress = document.getElementById("tableSectionInProgress");

    tableSectionInProgress.appendChild(cloneTaskCard);
}

function getTestingData(){
    var taskName = document.getElementById("inputTaskName").value;
    var taskTime = document.getElementById("inputEstimateTime").value;
    taskTime = parseInt(taskTime);
    var taskPriority = document.getElementById("taskPriority").value;
    var card = document.getElementById("taskCard");
    var cloneTaskCard = card.cloneNode(true);

    var cardTitle = cloneTaskCard.getElementsByTagName('span').titleTask;

    cardTitle.innerHTML = taskName;

    var cardTime = cloneTaskCard.getElementsByTagName('span').timeTask;
    
    cardTime.innerHTML = taskTime;
    
    var cardPriority = cloneTaskCard.getElementsByTagName('span').priority;
    
    cardPriority.innerHTML = taskPriority;

    cloneTaskCard.classList.remove("card__style");

    var tableSectionTesting = document.getElementById("tableSectionTesting");

    tableSectionTesting.appendChild(cloneTaskCard);
}

function getDoneData(){
    var taskName = document.getElementById("inputTaskName").value;
    var taskTime = document.getElementById("inputEstimateTime").value;
    taskTime = parseInt(taskTime);
    var taskPriority = document.getElementById("taskPriority").value;
    var card = document.getElementById("taskCard");
    var cloneTaskCard = card.cloneNode(true);

    var cardTitle = cloneTaskCard.getElementsByTagName('span').titleTask;

    cardTitle.innerHTML = taskName;

    var cardTime = cloneTaskCard.getElementsByTagName('span').timeTask;
    
    cardTime.innerHTML = taskTime;
    
    var cardPriority = cloneTaskCard.getElementsByTagName('span').priority;
    
    cardPriority.innerHTML = taskPriority;

    cloneTaskCard.classList.remove("card__style");

    var tableSectionDone = document.getElementById("tableSectionDone");

    tableSectionDone.appendChild(cloneTaskCard);
}

function deleteTask(){
    var card = document.getElementById("taskCard");
    card.remove();
}