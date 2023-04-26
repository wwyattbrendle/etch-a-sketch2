//default settings
let value = 16;

//target screen
const screen = document.getElementById("screen");

//make function to fill up the screen with boxes
const populate = function(value) {
    for(let i = 0; i < value; i++) {
        const parent[i] = document.createElement("div");
        parent[i].classList.add("parent-div")
        for(let j = 0; j < value; j++) {
            const child[j] = document.createElement("div");
            parent[i].appendChild(child[j]);
        }
        screen.appendChild(parent[i]);
    }
}

populate(value);