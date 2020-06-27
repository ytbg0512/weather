const relocateBtn = document.querySelector("#relocate-button");

function handleRelocateClick() {
    askForCoords();
    clickAmount = 0;
}

function init() {
    relocateBtn.addEventListener("click", handleRelocateClick);
}

init();