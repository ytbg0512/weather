const modal = document.querySelector(".modal");
const settingsPopup = document.querySelector("#settings");
const settingsBtn = document.querySelector("#open-settingsBtn");
const closeBtn = document.querySelector("#close-settingsBtn");
const makerBtn = document.querySelector("#maker");

function openSettings() {
    modal.classList.add("visible");
    settingsPopup.classList.add("visible");
    modal.classList.remove("hidden");
    settingsPopup.classList.remove("hidden");
    modal.style.opacity = "0.7";
    settingsPopup.style.opacity = "1";
    settingsBtn.style.display = "none";
    closeBtn.classList.add("visible");
    closeBtn.classList.remove("hidden");
    makerBtn.classList.add("visible");
    makerBtn.classList.remove("hidden");
}

function closeSettings() {
    modal.classList.add("hidden");
    settingsPopup.classList.add("hidden")
    modal.classList.remove("visible");
    settingsPopup.classList.remove("visible");
    modal.style.opacity = "0";
    settingsPopup.style.opacity = "0";
    settingsBtn.style.display = "inline";
    closeBtn.classList.remove("visible");
    closeBtn.classList.add("hidden");
    makerBtn.classList.remove("visible");
    makerBtn.classList.add("hidden");
}

document.addEventListener('keydown', function(event) {
    if(event.key == "Escape") {
        closeSettings();
    } else if(event.key == "F9") {
        openSettings();
    }
});

function init() {
    modal.addEventListener("click", closeSettings);
    settingsBtn.addEventListener("click", openSettings);
    closeBtn.addEventListener("click", closeSettings);
}

init();