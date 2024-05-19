import { CroDateLocale } from "./croDateLocale.js";

export class Calendar {
    constructor(value = null) {
        this.value = value;
        this.calendarContainer = document.querySelector('.datepicker-container');
        this.calendarEl = this.calendarContainer.querySelector(".calendar-container");
        if(this.value){
            this.select = this.value;
            const regex = /^(\d{2})\/(\d{2})\/(\d{4})$/;
            const isDate = regex.test(this.select);
            if(isDate) {
                this.month = Number(value.slice(3, 5) - 1);
                this.year = Number(value.slice(6));
                this.init(this.month, this.year);
            }
        }else {
            this.month = new Date().getMonth();
            this.year = new Date().getFullYear();
            this.select = null;
            this.init(this.month, this.year); 
        }
    }

    _initMonths(month, year) { 
        let header = 
        `<header>
            <ul class="month-year-container">
                <li class="month">${CroDateLocale.Months()[month]}</li>
                <li class="year">${year}</li>
            </ul>
            <ul class="toogle-container">
                <li class="prev-month"><img src="./assets/next.svg"></li>
                <li class="next-month"><img src="./assets/prev.svg"></li>
            </ul>
        </header>`

        return header;
    }
    _initDays(month, year) {
        let lastDate = new Date(year, month + 1, 0).getDate();
        let firstDay = new Date(year, month, 1).getDay();
        let lastDay = new Date(year, month + 1, 0).getDay();

        let days = '';

        if(firstDay == 0){
            firstDay = 7
        }
        
        for(let i = firstDay - 2; i >= 0; i--){
            days += `<div><span class="prev-days">${new Date(year, month, 0 - i).getDate()}</span></div>`
        }

        for(let i = 1; i <= lastDate; i++){
            days += `<div>
                        <span 
                            data-date="${new Date(year, month, i).toLocaleDateString()}" 
                            class="${new Date(year, month, i).toLocaleDateString() == this.select ? 'day select' : 'day'}">
                            ${i}
                        </span>
                    </div>`
        }

        if(lastDay == 0){
            lastDay = 7
        }
        
        for(let i = 1; i <= (7 - lastDay); i++){
            days += `<div><span class="next-days">${new Date(year, month, i).getDate()}</span></div>`
        }

        return days;
    }

    init(month, year) {
        let body = `
        <section class="calendar">
            <div class="weekdays">${CroDateLocale.Weeks()}</div>
            <div class="days">${this._initDays(month, year)}</div>
        </section>
        `
        this.calendarEl.innerHTML = this._initMonths(month, year) + body;
        this.calendarEl.querySelector('.prev-month').addEventListener("click", () => {
            this.decreaseMonth();
        });
        this.calendarEl.querySelector('.next-month').addEventListener("click", () => {
            this.increaseMonth();
        });
        this.calendarEl.querySelectorAll('.day').forEach(day => {
            day.addEventListener('click', (ev) => {
                this.onClickDate(ev);
            })
        })
        
    }

    increaseMonth() {
        this.month++
        if(this.month > 11){
            this.month = 0;
            this.year++;
            this.init(this.month, this.year);
        }
        this.init(this.month, this.year);
    }

    decreaseMonth() {
        this.month--
        if(this.month < 0){
            this.month = 11;
            this.year--;
            this.init(this.month, this.year);
        }
        this.init(this.month, this.year);
    }

    onClickDate(ev) {
        this.select = ev.target.dataset.date;
        this.calendarContainer.querySelector('input').value = this.select;
        this.calendarEl.style.display = 'none';
        this.init(this.month, this.year);
    }
}
