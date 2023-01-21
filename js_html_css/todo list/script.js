let todos = [
    {id:1, title:"Putzen", isDone:false},
    {id:2, title:"Kochen", isDone:true},
    {id:3, title:"Waschen", isDone:false},
    {id:4, title:"Einkaufen", isDone:false}
  
];

 currentId = 5;

function addNewTask(){
    console.log(currentId);
    let text = document.getElementById("input").value;
    todos.push({id:currentId,title:text,isDone:false});
    currentId++
    outputTasks();
    console.log(currentId)
};


function outputTasks(){


let html = ""
todos.forEach(element => {
    
    html += "<button class='delete' onclick='deleteTask("+ element.id +")'><i class='fa-solid fa-trash-can'></i></button>" + "<div id='" + element.id + "' class='output'>" + element.title + " - Status: " + element.isDone + "</div>" + "<button class='done' onclick='setIsDone(" + element.id +")'><i class='fa-solid fa-check-double'></i></button>"
    
});
    document.getElementById("todos").innerHTML = html;
};


function setIsDone(id){
    let todo = todos.find(element => {
        if (element.id === id) {
            return true;
        }
    })
    todo.isDone = !todo.isDone;
    outputTasks();
}


function deleteTask(id){
    let index = todos.findIndex(element => {
        if (element.id === id) {
            return true;
        }
    })
    todos.splice(index,1);
    outputTasks()
}