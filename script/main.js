//Basic variables
let list = document.querySelector('#list');
let input = document.querySelector('#input');
let clearBtn = document.querySelector('.clear');
let date = document.querySelector('#date');

//variable that store a todo
let LIST = [];
let id = 0

//classes selector
let CHECK = 'fa-check-circle';
let UNCHECK = 'fa-circle';
let LINETHROUGH = 'lineThrough';




/** function that display a  Todolist*/

//parameters variables of addToDo function
const addToDo = (todo, id, done, trash) => {
    //if the trash is true it return else it should update
    if (trash) { return }
    //the id point at the particuler item (unique number)
    const DONE = done ? CHECK : UNCHECK;
    const LINE = done ? LINETHROUGH : '';
    htmlText = `
    <li class="item">
                        <i class="co far fa-circle" ${DONE} id='${id}' job="complete"></i>
                        <p class="text" ${LINE}>${todo}</p>
                        <i class="de fas fa-trash-alt" id='${id}' job="delete"></i>
                    </li>
    `

    let position = 'beforeend';
    list.insertAdjacentHTML(position, htmlText);
}

const addToDoAfterKeypress = (e) => {
    e.preventDefault();
    if (e.keyCode === 13) {
        let todo = input.value;// todo has be set to true
        if (todo) {
            //addToDo function values of arguments
            addToDo(todo, id, false, false);
            //data structure that stores todo
            LIST.push({
                name: todo,
                id: id,
                done: false,
                trash: false
            })
            console.log(LIST);
        }
        input.value = '';
        id++
    }
}

const completeTodo = (element) => {
    //triggering the updates on the UI
    element.classList.toggle(CHECK);
    element.classList.toggle(UNCHECK);
    element.parentElement.querySelector('.text').classList.toggle(LINETHROUGH);
    //upate our data structure
    LIST[element.id].done = LIST[element.id].done ? false : true;
}

const removeTodo = (element) => {
    element.parentElement.parentElement.removeChild(element.parentElement);
    //upate our data structure
    LIST[element.id].trash = true;
}
const dynamicFunction = (e) => {
    //variable
    let element = e.target;
    let elementJob = e.target.attributes.job.value;
    console.log(element, elementJob)
    if (elementJob === 'complete') {
        completeTodo(element);
    } else if (elementJob === 'delete') {
        removeTodo(element);
    }

}
input.addEventListener('keyup', addToDoAfterKeypress);
list.addEventListener('click', dynamicFunction);