const createTodoBtn = document.getElementById("create");
const todoList = document.getElementById("todolist");


let todos = []

createTodoBtn.addEventListener("click", createNewTodo);


function createNewTodo(){
 
    
    const item = {
        id: new Date().getTime(),
        text: "",
        complete: false
    }
    console.log(item)

    const {itemEl, inputTextEl} = createTodoElement(item);


    //add ontop of the 
    todos.unshift(item);

    todoList.prepend(itemEl);

    inputTextEl.removeAttribute("disabled");
    inputTextEl.focus();
   


}


function createTodoElement(item){

    const itemEl = document.createElement("div");
    const checkBoxEl = document.createElement("input");
    const inputTextEl = document.createElement("input");
    const actionsEl = document.createElement("div");
    const editBtnEl = document.createElement("button");
    const deleteBtnEl = document.createElement("button");



    //Classnames
    itemEl.classList.add("item")
    actionsEl.classList.add("actions")
    editBtnEl.classList.add("material-icons")
    deleteBtnEl.classList.add("material-icons", "remove-btn")

    //set values

    inputTextEl.type ="text"
    inputTextEl.value = item.text;
    inputTextEl.setAttribute("disabled", "")

    checkBoxEl.type = "checkbox"
    checkBoxEl.checked = item.complete;
    editBtnEl.innerText ="edit";
    deleteBtnEl.innerText ="delete";






    if(item.complete){
        itemEl.classList.add("complete");
    }else{
        itemEl.classList.remove("complete");
    }



    //Append Elements
    actionsEl.append(editBtnEl);
    actionsEl.append(deleteBtnEl);

    itemEl.append(checkBoxEl);
    itemEl.append(inputTextEl)
    itemEl.append(actionsEl);



    editBtnEl.addEventListener("click", ()=>{
        inputTextEl.removeAttribute("disabled");
        inputTextEl.focus();
    })

    return {itemEl, inputTextEl}


    
}