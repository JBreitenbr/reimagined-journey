let grid=20;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  stroke(255);
  noFill();
  for(let x=0;x<width;x+=grid){
    for(let y=0;y<height;y+=grid){
      push();
      translate(x,y);
      drawRandomPattern();
      pop();
    }
  }
  noLoop();
}

function drawRandomPattern() {
  let r=random(1);
  if(r<0.5) line(0,grid,grid,0);
  else line(0,0,grid,grid);
}
