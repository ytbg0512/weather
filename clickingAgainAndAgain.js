const footer = document.querySelector("footer");

let clickAmount = 0;

function executeClicks() {
    alert("위치 정보를 새로 고침합니다.");
    askForCoords();
    clickAmount = 0;
}

function handleClickFooter() {
    if (clickAmount < 4) {
        clickAmount = clickAmount + 1;
    } else {
        executeClicks();
    }
}

function init() {
    footer.addEventListener("click", handleClickFooter);
}

init();