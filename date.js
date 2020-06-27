const dateText = document.querySelector(".js-date");

function renderDate(month, day, date, hour, minute) {
    let dayString = "?";
    if (day == 1) {
        dayString = "월";
    } else if (day == 2) {
        dayString = "화";
    } else if (day == 3) {
        dayString = "수";
    } else if (day == 4) {
        dayString = "목";
    } else if (day == 5) {
        dayString = "금";
    } else if (day == 6) {
        dayString = "토";
    } else if (day == 7) {
        dayString = "일";
    }

    let hoursIn12 = 0;
    if (hour > 12) {
        hoursIn12 = hour - 12;
    }

    dateText.innerText = `${month}월 ${date}일 ${dayString}요일 ${hoursIn12}:${minute < 10 ? `0${minute}` : minute}`;
}

function getDate() {
    const dateObj = new Date();
    const month = dateObj.getMonth() + 1;
    const date = dateObj.getDate();
    const day = dateObj.getDay();
    const hours = dateObj.getHours();
    const minutes = dateObj.getMinutes();
    renderDate(month, day, date, hours, minutes);
}

function init() {
    getDate();
    setInterval(getDate, 50);
}

init();