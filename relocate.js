const relocateBtn = document.querySelector("#relocate-button");

function handleRelocateClick() {
    localStorage.removeItem("coords");
    cityText.innerText = "";
    closeSettings();
    loadCoords();
}

function init() {
    relocateBtn.addEventListener("click", handleRelocateClick);
}

init();