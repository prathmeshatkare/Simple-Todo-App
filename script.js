let ctr = 1;


function addTodo(){
    const inputBox = document.querySelector("#input-box");
    const value = inputBox.value;

    const newElement = document.createElement("ul")
    newElement.setAttribute("id",ctr);

    newElement.innerHTML = "<li>" + value + "<button onclick = 'deleteTodo(" + ctr + ")'>&#x2715;</button></li>" 

    const parentElement = document.querySelector("body")
    parentElement.appendChild(newElement);

    ctr = ctr + 1;
    inputBox.value = "";
}
    

function deleteTodo(id){
    const deleteElement = document.getElementById(id);
    deleteElement.parentNode.removeChild(deleteElement);
    
}