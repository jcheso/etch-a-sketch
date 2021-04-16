function resetGrid(){
    let gridSquares = prompt("How many squares per a side do you want?");

    if (gridSquares <= 100){
    // Find container to insert grid in to
    const gridContainer = document.querySelector("#container");

    // Initialise variables for grid generation
    let i = 0;
    let size = (1 / gridSquares) * 100;
    let gridCount = gridSquares * gridSquares;

    // Iterate through adding flex box with scaled width and height
    for (i; i < gridCount; i++) {
    const gridElement = document.createElement("div");
    gridElement.classList.add("grid-element");
    gridElement.setAttribute("id", i);
    gridElement.setAttribute("style", `height: ${size}vh; width: ${size}vw`);
    gridContainer.appendChild(gridElement);
    }
    }
    else {
        alert("The maximum number of squares is 100 per a side! Try again")
    }
    } 



// Set up a hover effect so that the grid divs change colour when your mouse passes over them
container.addEventListener(
  "mouseover",
  function (event) {
    // highlight the mouseover target
    event.target.setAttribute("class", "grid-element-hover");
    // // reset the color after a short delay
    // setTimeout(function() {
    //     event.target.setAttribute("class", "grid-element");
    // }, 10);
  },
  false
);
