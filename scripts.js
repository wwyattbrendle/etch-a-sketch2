//default settings
let value = 16;

//target screen
const screen = document.getElementById("screen");

//initialize arrays
const parent = [];
const child = [[],[]];

//global boolean for document eventlisteners
let mousedown = false;

//document event listeners
document.addEventListener("mousedown", function(){
    mousedown = true;
});

document.addEventListener("mouseup", function() {
    mousedown = false;
});

//make function to fill up the screen with boxes
const populate = function(value) {
    for(let i = 0; i < value; i++) {
        parent[i] = document.createElement("div");
        parent[i].classList.add("parent-div")
        for(let j = 0; j < value; j++) {
            child[[i],[j]] = document.createElement("div");
            child[[i],[j]].addEventListener("mouseover", function(e) {
                e.preventDefault();
                if(mousedown){
                    this.classList.add("child");
                }
            });
            parent[i].appendChild(child[[i],[j]]);
        }
        screen.appendChild(parent[i]);
    }
}

//get user input and change value's value
const getValue = () => {
    value = parseInt(prompt("What size(x) do you want the grid to have?"));
    if(value < 2 || value > 100 || !value) {
        alert("error, choose a number between 2 and 100");
        getValue();
    }
}

//add sketch button
const sketch = document.getElementById("sketch");
sketch.addEventListener("click", function() {
    for(let i = 0; i < value; i++) {
        screen.removeChild(parent[i]);
    }
    getValue();
    populate(value);
});

populate(value);