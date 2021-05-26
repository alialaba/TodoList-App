const clearBtn = document.querySelector(".clear-btn");
const date = document.getElementById("date");
const list = document.getElementById("list");
const input = document.getElementById("input");


//date function
const dateInfo = () => {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const myDate = new Date();
    const now = [days[myDate.getDay()] + ", " + months[myDate.getMonth()] + " " + myDate.getDate()];
    console.log(now);
    date.innerHTML = now

}
dateInfo()
