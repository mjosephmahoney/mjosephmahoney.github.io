var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.querySelectorAll("li");
var deleteButton = document.getElementsByClassName("delete");

function inputLength(){
    return input.value.trim().length;
}

function createListItem(){
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = ""; 
    var newButton = document.createElement("button");
    newButton.classList.add("delete");
    newButton.innerHTML ="Delete";
    li.appendChild(newButton);
    enableDeleteButtons();
    //li.classList.toggle("done");
    li.addEventListener("click", function(){
        li.classList.toggle("done");
    })
}

function addListAfterClick(){
    if(inputLength() > 0) {
        createListItem();
    }
}

function addListAfterEnter(event){
    if(inputLength() > 0 && event.keyCode === 13) { //keyCode 13 is the Enter key
        createListItem(); 
    }
}

//deleteButton is a collection of HTML elements, so I had
//to turn it into an array to use forEach
function enableDeleteButtons(){
    Array.from(deleteButton).forEach (button => {
    button.addEventListener("click", function(){
        button.parentNode.remove();
    })    
    })
}


li.forEach(item => {
    item.addEventListener("click", function(){
        item.classList.toggle("done");
    })
});

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterEnter);

enableDeleteButtons();