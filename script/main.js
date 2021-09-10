//Basic variables
let list = document.querySelector('#list');
let input = document.querySelector('#input');
let clearBtn = document.querySelector('.clear');
let date = document.querySelector('#date');

//variable that store a todo
let LIST = [];
let id = 0
// created a function that add a Todolist

const addToDo = () => {
    htmlText = `
    <li class="item">
                        <i class="co far fa-circle " job="complete"></i>
                        <p class="text">Laptop</p>
                        <i class="de fas fa-trash-alt" job="delete"></i>
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
            addToDo(todo);
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
    }
}

input.addEventListener('keyup', addToDoAfterKeypress)