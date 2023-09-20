const createTodoBtn = document.getElementById("create");
const todolist = document.getElementById("todolist");

let todos =[];



//Event to create new todo plus hoisting
createTodoBtn.addEventListener("click", createNewTodo);


//function to create todo
function createNewTodo(){



    // data structure 
    const item ={
        id: new Date().getTime(),
        text: "",
        complete: false
    }



    //object destructuring and closure 
    const {itemEl, inputTextEl} = createTodoElement(item);

    console.log(itemEl);
    console.log(inputTextEl);

    todos.unshift(item);
    console.log(todos)

    todolist.prepend(itemEl)

    inputTextEl.removeAttribute("disabled");
    inputTextEl.focus();

}

function createTodoElement(item){

    //Create Element
    const itemEl = document.createElement("div");
    const checkBoxEl = document.createElement("input");
    const inputTextEl = document.createElement("input");
    const actionsEl = document.createElement("div");
    const editBtn = document.createElement("button");
    const deleteBtn = document.createElement("button");


    //Classnames
    itemEl.classList.add("item");
    actionsEl.classList.add("actions");

    editBtn.classList.add("material-icons");
    deleteBtn.classList.add("material-icons", "remove-btn");


    checkBoxEl.type = "checkbox";
    inputTextEl.type = "text";
    //setAttr
    inputTextEl.setAttribute("disabled", "")


    //set values
    editBtn.innerText ="edit";
    deleteBtn.innerText ="delete";

    inputTextEl.value = item.text;
    checkBoxEl.checked = item.complete;

    if(item.complete){
        itemEl.classList.add("complete");
    }else{
        itemEl.classList.remove("complete");
    }

    //Append elements
    actionsEl.append(editBtn);
    actionsEl.append(deleteBtn);

    itemEl.append(checkBoxEl)
    itemEl.append(inputTextEl)
    itemEl.append(actionsEl);


    //return destruced objects
    return {itemEl, inputTextEl}


}