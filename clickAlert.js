let clickCount = 0;

function runClickEvent() {
    if (clickCount == 5) {
        ui.style.backgroundImage = "url(https://s3.ap-northeast-2.amazonaws.com/img.kormedi.com/news/culture/it/__icsFiles/artimage/2016/11/15/c_km60701/shutterstock_470843366.jpg)";
        alert('김치찌개 모드가 활성화됨');
    } else if (clickCount > 9) {
        ui.style.backgroundImage = "none";
        clickCount = 0;
        alert('김치찌개 모드가 비활성화됨');
    }
}

function countClick() {
    clickCount = clickCount + 1;
    runClickEvent();
}

function listenToClick() {
    makerBtn.addEventListener("click", countClick);
}

function init() {
    listenToClick();
}

init();