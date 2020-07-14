const dateText = document.querySelector(".js-date");

function renderDate(month, day, date, hour, minute) {
  let dayString = "";
  switch (day) {
    case 0:
      dayString = "일";
      break;
    case 1:
      dayString = "월";
      break;
    case 2:
      dayString = "화";
      break;
    case 3:
      dayString = "수";
      break;
    case 4:
      dayString = "목";
      break;
    case 5:
      dayString = "금";
      break;
    case 6:
      dayString = "토";
      break;
  }

  let hoursIn12 = 0;
  if (hour > 12) {
    hoursIn12 = hour - 12;
  } else if (hour == 0) {
    hoursIn12 = 12;
  } else {
    hoursIn12 = hour;
  }

  dateText.innerText = `${month}월 ${date}일 ${dayString}요일 ${hoursIn12}:${
    minute < 10 ? `0${minute}` : minute
  }`;
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
  setInterval(getDate, 500);
}

init();
