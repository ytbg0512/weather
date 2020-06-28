const searchForm = document.querySelector(".js-searchForm");
const searchInput = searchForm.querySelector("input");

function goSearch(text) {
    location.href = `https://www.google.com/search?q=${text}`;
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = searchInput.value;
    goSearch(currentValue);
}

function init() {
    searchForm.addEventListener("submit", handleSubmit);
}

init();