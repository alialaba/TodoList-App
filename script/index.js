const clearBtn = document.querySelector(".clear-btn");
const date = document.getElementById("date");
const lists = document.getElementById("list");
const input = document.getElementById("input");


//date function
const dateInfo = () => {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const myDate = new Date();
    const now = [days[myDate.getDay()] + ", " + months[myDate.getMonth()] + " " + myDate.getDate()];
    date.innerHTML = now

}
dateInfo()


//addToDo
const addToDo = (todo) => {
    //using insertAdjacentHTML method that accept 2 parameter (position, text)
    let htmlText = `
                <li class="item">
                        <i class="far fa-circle " job="complete"></i>
                        <p class="text">${todo}</p>
                        <i class="fas fa-trash-alt" job="delete"></i>
                 </li>
                `
    let position = 'beforeend';
    lists.insertAdjacentHTML(position, htmlText);
}


const addToDoAfterKeyPress = (e) => {
    let todo = input.value;
    if (todo.length > 0 && e.keyCode === 13) {
        addToDo(todo);
        //clear out / empty the initial text insert 
        input.value = "";
    }
}
input.addEventListener("keypress", addToDoAfterKeyPress)
