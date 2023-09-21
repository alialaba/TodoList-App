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

    //add new todo item on top
    todos.unshift(item);
    console.log(todos)

    todolist.prepend(itemEl)

    inputTextEl.removeAttribute("disabled");
    inputTextEl.focus();

    Save()

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


    //Events

    checkBoxEl.addEventListener("change", ()=>{
        item.complete = checkBoxEl.checked;
        item.complete ? itemEl.classList.add("complete") : itemEl.classList.remove("complete");

        Save()
    })

    inputTextEl.addEventListener("blur", ()=>{
        inputTextEl.setAttribute("disabled", "");

        Save();
    })
    inputTextEl.addEventListener("input", ()=>{
        item.text = inputTextEl.value;
    })

    editBtn.addEventListener("click", ()=>{
        inputTextEl.removeAttribute("disabled");
        inputTextEl.focus();
    });

    deleteBtn.addEventListener("click", ()=>{
        todos = todos.filter((todo)=> todo.id !== item.id );
        itemEl.remove()

        Save();
    })

    //return destruced objects
    return {itemEl, inputTextEl}


}

//display all todos available in the localstorage
function displayTodos(){
    load();

    for(let i = 0 ; i < todos.length; i++){
        let item = todos[i];
       
        //append destructed object element
        const {itemEl} = createTodoElement(item);
        todolist.append(itemEl)
    }
}

displayTodos()



//load todolist from localstorage
function load(){

    const data = JSON.parse(localStorage.getItem("todos"));
    if(data){
        todos = data;
    }
}

//set todos to localstorage
function Save(){
    const savedTodos = localStorage.setItem("todos", JSON.stringify(todos));
    return savedTodos;
}