function setup() {
  createCanvas(128,128);
}

function draw() {
  background(0);
  strokeWeight(4);
  fill(60, 100, 120);
  triangle(12,120,116,120,116,10);
  fill(94, 55, 43);
  triangle(0,120,106,108,106,0);
  fill(255);
  textSize(32);
  textFont("serif");
  text("40", 68, 100);
}
