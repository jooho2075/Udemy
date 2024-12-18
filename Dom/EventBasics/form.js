const form = document.querySelector("#shelterForm");
form.addEventListener("submit", function(e) {
    e.preventDefault(); // e.preventDefault - 특정 event의 기본 동작이 수행되지 않도록 막아주는 역할
    console.log("submitted the form");
});