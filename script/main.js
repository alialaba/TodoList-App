
// window.addEventListener("load", function(){

    //Select Element
    const form = document.getElementById("todos__form");
   const taskInput = document.getElementById("todos__input");
    const tasksEl = document.querySelector(".tasks");


    //add all task list
    let tasksList = []

    let taskId = 0;
    form.addEventListener("submit", function(e){

        //prevent form reload
        e.preventDefault();

      //get task input value
      let  taskInputValue =  taskInput.value.trim();

        if(taskInputValue !== ""){
            createTask(taskInputValue);

            tasksList.push({task: taskInputValue , id: taskId })
        }

        //increase new task
        taskId++
        console.log(tasksList)

        //clear input field
        taskInput.value = " ";

    })


    // const editBtns = document.querySelectorAll(".task__edit");

    // console.log(editBtns)

    
    //create task func
    function createTask (inputValue){
            //Create Elements
            const taskEl = document.createElement("div");
            const taskContent = document.createElement("div");
            const taskActions = document.createElement("div");
            const taskText = document.createElement("input");
            const btnEdit = document.createElement("button");
            const btnDelete = document.createElement("button");

             //Set ClassNames
            taskEl.classList.add("task");
            taskContent.classList.add("task__content");
            taskActions.classList.add("task__actions");
            taskText.classList.add("task__text");
            btnEdit.classList.add("task__edit");
            btnDelete.classList.add("task__delete");

            //get input value
            const inputText = inputValue;

            //Set attributes
            taskText.setAttribute("readonly", "readonly");

            //Set Values
            taskText.value = inputText;
            btnDelete.textContent = "Delete";
            btnEdit.textContent ="Edit";

            //Append Elements (according to tree stack);
            taskContent.appendChild(taskText)
            taskEl.appendChild(taskContent)
            taskActions.appendChild(btnEdit)
            taskActions.appendChild(btnDelete)
            taskEl.appendChild(taskActions)
            tasksEl.appendChild(taskEl)

            

        }  


