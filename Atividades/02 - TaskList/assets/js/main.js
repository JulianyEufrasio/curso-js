const inputNewTask = document.querySelector('.input-new-task');
const btnNewTask =  document.querySelector('.btn-new-task');
const tasks = document.querySelector('.tasks');

function newTask(taskInput){
    const item = newItem();
    item.innerText = taskInput;
    tasks.appendChild(item);
    cleanInput();
    btnDelete(item);
    saveTask();
}

function newItem(){
    const item = document.createElement('li');
    return item;
}

function btnDelete(item){
    item.innerText += '  ';
    const btnDel = document.createElement('button');
    btnDel.setAttribute('class', 'btn-delete');
    btnDel.innerText = 'Apagar';
    item.appendChild(btnDel);
}

document.addEventListener('click', function(e){
    const el = e.target;
    if(el.classList.contains('btn-delete')){
        el.parentElement.remove();
        saveTask();
    }
});

function cleanInput(){
    inputNewTask.value = '';
    inputNewTask.focus();
}

btnNewTask.addEventListener('click', function(){
    if(!inputNewTask.value) return;
    newTask(inputNewTask.value);
});

inputNewTask.addEventListener('keypress', function(e){
    if(e.keyCode === 13){
        if(!inputNewTask.value) return;
        newTask(inputNewTask.value);
    }
})

function saveTask(){
    const itemTask = saveTask.querySelectorAll('li');
    const listTasks = [];

    for(let task of itemTask){
        let taskText = taskText.innerText;
        taskText = taskText.replace('Apagar', '').trim;
        listTasks.push(taskText);
    }

    const taskJSON = JSON.stringify(listTasks);
    localStorage.setItem('tasks', taskJSON);
}

function returnSaveTask(){
    const tasks = localStorage.getItem('tasks');
    const listTasks = JSON.parse(tasks);

    for (let task of listTasks){
        newTask(task);
    }
}
returnSaveTask();