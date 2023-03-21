

const now = new Date();

const date = {
    weekday: now.toDateString().slice(0, 3),
    hours: now.getHours(),
    minutes: now.getMinutes(),
    meridiem: this.hours > 0 && this.hours < 12 ? 'AM' : 'PM',
};

console.log(date);


