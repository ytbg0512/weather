const modal = document.querySelector(".modal");
const settingsPopup = document.querySelector("#settings");
const settingsBtn = document.querySelector("#open-settingsBtn");
const closeBtn = document.querySelector("#close-settingsBtn");

function openSettings() {
    modal.classList.add("visible");
    settingsPopup.classList.add("visible");
    modal.classList.remove("hidden");
    settingsPopup.classList.remove("hidden");
    modal.style.opacity = "0.7";
    settingsPopup.style.opacity = "1";
    settingsBtn.style.display = "none";
}

function closeSettings() {
    modal.classList.add("hidden");
    settingsPopup.classList.add("hidden")
    modal.classList.remove("visible");
    settingsPopup.classList.remove("visible");
    modal.style.opacity = "0";
    settingsPopup.style.opacity = "0";
    settingsBtn.style.display = "inline";
}

document.addEventListener('keydown', function(event) {
    if(event.keyCode == 27) {
        closeSettings();
    } else if(event.keyCode == 120) {
        openSettings();
    }
});

function init() {
    modal.addEventListener("click", closeSettings);
    settingsBtn.addEventListener("click", openSettings);
    closeBtn.addEventListener("click", closeSettings);
}

init();