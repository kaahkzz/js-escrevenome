function setup() {
  createCanvas(400, 400);
  background("black")
}

function draw() {
  stroke("pink");
  fill("pink");
  
  
  if (mouseIsPressed) {
    rect(mouseX, mouseY, 10, 25);
  }
}