- implement a submit form input value to create a task/todo
- implement edit func
- implement delete func
- implement localstorage to storage todo



keywords
- window
- addeventlistener
- load


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

            //delete task
            btnDelete.addEventListener("click", function(){
                 tasksEl.removeChild(taskEl);
   
            })