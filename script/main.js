
window.addEventListener("load", function(){

    //Select Element
    const form = document.getElementById("todos__form");
    const input = document.getElementById("todos__input");
    const tasksEl = document.querySelector(".tasks");

    form.addEventListener("submit", function(e){

        //prevent form reload
        e.preventDefault();

        if(input.value !== ""){
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
            const inputValue = input.value.trim();

            //Set attributes
            taskText.setAttribute("readonly", "readonly");

            //Set Values
            taskText.value = inputValue;
            btnDelete.textContent = "Delete";
            btnEdit.textContent ="Edit";

            //Append Elements (according to tree stack);
            taskContent.appendChild(taskText)
            taskEl.appendChild(taskContent)
            taskActions.appendChild(btnEdit)
            taskActions.appendChild(btnDelete)
            taskEl.appendChild(taskActions)
            tasksEl.appendChild(taskEl)

            //clear input field
            input.value = "";

              //edit task input
         btnEdit.addEventListener("click", function(){
            if(btnEdit.textContent.toLowerCase() === "edit"){
             btnEdit.textContent = "Save";
             taskText.removeAttribute("readonly")
            }else{
             btnEdit.textContent = "Edit";
             taskText.setAttribute("readonly", "readonly")
            }
         })




        }  

        
    
        
    })

})