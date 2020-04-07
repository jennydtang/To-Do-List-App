
function todoList(){
    var item = document.getElementById("todoInput").value //connects to input in form
    var text = document.createTextNode(item) //get the value(item) and enter the value into text.
    //TextNode objects make it possible to insert texts into the document as nodes (appendChild, insertBefore)
    var newItem = document.createElement("li") //creates li item
    newItem.appendChild(text) //take text entered and put into li
    document.getElementById("todoList").appendChild(newItem) //grab list and add li to it
    todoInput.value = ''; //clears input box


}
document.querySelector("ul").addEventListener('click', function(done){ //add event listener to list
    var doneItem =done.target; //target of item for event
    if(doneItem.tagName.toUpperCase()=="LI"){ //declare target(doneItem) to equal li
        doneItem.parentNode.removeChild(doneItem); //now that li equals target, remove the child of UL, which is the li
    }
});
    