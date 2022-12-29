const grid = document.querySelector(".canvas");
const userInput = document.getElementById("quantity");
const resetButton = document.querySelector(".reset");
const input = userInput.value
createGrid = () => {
    for (let i = 0; i < 256; i++) {
        const div = document.createElement("div");
        div.classList.add("square");
        grid.appendChild(div);
    }
};

function updateGrid(input) {
    grid.innerHTML = "";
    grid.style.setProperty(
        "grid-template-columns",
        `repeat(${input}, 2fr)`
    );
    grid.style.setProperty(
        "grid-template-rows",
        `repeat(${input}, 2fr)`
    );


    for (let i = 0; i < input * input; i++) {
        const div = document.createElement("div");
        div.classList.add("square");
        grid.appendChild(div);



        div.addEventListener("mouseover", function () {
            div.style.backgroundColor = "yellow";
        });


    }
    console.log(userInput.value);
    s


};



userInput.addEventListener("change", updateGrid);

resetButton.addEventListener("click", function () {
    grid.innerHTML = "";
    userInput.value = "";
    grid.style.setProperty("grid-template-columns", `repeat(16, 2fr)`);
    grid.style.setProperty("grid-template-rows", `repeat(16, 2fr)`);
    createGrid();
});

createGrid();