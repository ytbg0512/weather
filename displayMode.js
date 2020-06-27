const ui = document.querySelector("body");
const popup = document.querySelector(".modal-content");
const followSystemBtn = document.querySelector("#followSystem");
const lightModeBtn = document.querySelector("#lightMode");
const darkModeBtn = document.querySelector("#darkMode");

function followSystem() {
    ui.classList.remove("light");
    ui.classList.remove("dark");
    popup.classList.remove("light");
    popup.classList.remove("dark");

    localStorage.setItem("preferredStyle", "followSystem");

    followSystemBtn.classList.add("selected");
    lightModeBtn.classList.remove("selected");
    darkModeBtn.classList.remove("selected");

    followSystemBtn.innerText = "시스템 설정에 따르기 (기본) ✔";
    lightModeBtn.innerText = "항상 라이트 모드 사용";
    darkModeBtn.innerText = "항상 다크 모드 사용";
}

function changeToLight() {
    ui.classList.add("light");
    ui.classList.remove("dark");
    popup.classList.add("light");
    popup.classList.remove("dark");

    localStorage.setItem("preferredStyle", "light");

    followSystemBtn.classList.remove("selected");
    lightModeBtn.classList.add("selected");
    darkModeBtn.classList.remove("selected");

    followSystemBtn.innerText = "시스템 설정에 따르기 (기본)";
    lightModeBtn.innerText = "항상 라이트 모드 사용 ✔";
    darkModeBtn.innerText = "항상 다크 모드 사용";
}

function changeToDark() {
    ui.classList.add("dark");
    ui.classList.remove("light");
    popup.classList.add("dark");
    popup.classList.remove("light");

    localStorage.setItem("preferredStyle", "dark");

    followSystemBtn.classList.remove("selected");
    lightModeBtn.classList.remove("selected");
    darkModeBtn.classList.add("selected");
    
    followSystemBtn.innerText = "시스템 설정에 따르기 (기본)";
    lightModeBtn.innerText = "항상 라이트 모드 사용";
    darkModeBtn.innerText = "항상 다크 모드 사용 ✔";
}

function init() {
    followSystemBtn.addEventListener("click", followSystem);
    lightModeBtn.addEventListener("click", changeToLight);
    darkModeBtn.addEventListener("click", changeToDark);
    const preferredStyle = localStorage.getItem("preferredStyle");
    switch (preferredStyle) {
        case "followSystem":
            followSystem(); break;
        case "light":
            changeToLight(); break;
        case "dark":
            changeToDark(); break;
    }
}

init();