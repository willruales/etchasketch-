const grid = document.querySelector(".canvas");
const userInput = document.getElementById("quantity");
const resetButton = document.querySelector(".reset");
const input = userInput.value
const select = document.querySelector(".select")

function createGrid(size) {
    grid.innerHTML = ""
    grid.style.gridTemplateColumns = `repeat(${size},1fr)`;
    grid.style.gridTemplateRows = `repeat(${size},1fr)`;
    let numDiv = size * size
    for (let i = 0; i < numDiv; i++) {
        const div = document.createElement("div")
        div.classList.add("square")
        grid.appendChild(div)
        div.addEventListener("mouseover", function () {
            div.classList.add("color")
        })
    }
}

getSize = () => {
    console.log(userInput.value)
    return userInput.value
}

select.addEventListener("click", function () {
    let size = getSize();
    createGrid(size)
})

resetButton.addEventListener("click", function () {
    grid.innerHTML = "";
    userInput.value = "";
    grid.style.setProperty("grid-template-columns", `repeat(16, 2fr)`);
    grid.style.setProperty("grid-template-rows", `repeat(16, 2fr)`);
    createGrid(16);
});

createGrid(16)