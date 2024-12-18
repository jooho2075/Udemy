const form = document.querySelector("#shelterForm");
const input = document.querySelector("#catName");
const list = document.querySelector("#cats");

form.addEventListener("submit", function(e) {
    e.preventDefault(); // e.preventDefault - 특정 event의 기본 동작이 수행되지 않도록 막아주는 역할
    
    const catName = input.value;
    const newLI = document.createElement("LI");
    
    newLI.innerText = catName;
    list.append(newLI);

    input.value = "";
});