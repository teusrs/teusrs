function setup() {
    createCanvas(1000, 1000);
    background("blue");
  }
  
  function draw() {
    stroke("purple");
    // console.log(mouseIsPressed)
  
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 30, 45);
    }
  }
  