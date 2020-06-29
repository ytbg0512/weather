const gitHubBtn = document.querySelector("#github-button");

function goGitHub() {
    location.href = "https://github.com/ytbg0512/weather";
}

function init() {
    gitHubBtn.addEventListener("click", goGitHub);
}

init();