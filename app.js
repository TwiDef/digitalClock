const dayNode = document.querySelector('.day');
const hoursNode = document.querySelector('.hours');
const minutesNode = document.querySelector('.minutes');
const meridiemNode = document.querySelector('.meridiem');

function displayDate() {
    const now = new Date();

    const date = {
        weekday: now.toDateString().slice(0, 3),
        hours: now.getHours(),
        minutes: now.getMinutes(),
        meridiem: this.hours > 0 && this.hours < 12 ? 'AM' : 'PM',
    };

    dayNode.innerHTML = (date.weekday).toUpperCase();
    hoursNode.innerHTML = addZeroToNum(date.hours);
    minutesNode.innerHTML = addZeroToNum(date.minutes);
    meridiemNode.innerHTML = date.meridiem;
}

setInterval(displayDate, 1000);

function addZeroToNum(num) {
    if (num < 9) {
        return '0' + num;
    } else {
        return num;
    }
}
