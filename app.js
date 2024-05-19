import { formatDate } from "./js/formatDate.js";
import { Calendar } from "./js/initCalendar.js";

const dateInput = document.querySelector(".datepicker-container input");
const dateIcon = document.querySelector(".datepicker-container .datepicker-icon");
const calendar = new Calendar();

dateInput.addEventListener('input', formatDate);

dateInput.addEventListener('blur', (ev) => {
    new Calendar(ev.target.value);
});

dateInput.addEventListener('focus', () => {
    calendar.calendarEl.style.display = 'none';
});

dateIcon.addEventListener('click', () => {
    let display = calendar.calendarEl.style.display;
    if(!display || display == 'none') {
        calendar.calendarEl.style.display = 'block'
    }else {
        calendar.calendarEl.style.display = 'none';
    }
})

