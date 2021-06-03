let slider;
let phase = 0;
let zoff = 0;
let mic;
function setup() {
  createCanvas(600, 600);
  slider = createSlider(0, 10, 3, 0.1);
}

function draw() {
  background(0, 25);
  translate(width / 2, height / 2);
  stroke(255);
  noFill();
  beginShape();
  let noiseMax = slider.value();
  for (let a = 0; a < TWO_PI; a += 0.05) {
    let xoff = map(cos(a), -1, 1, 0, noiseMax);
    let yoff = map(sin(a), -1, 1, 0, noiseMax);
    let r = map(noise(xoff, yoff, zoff), 0, 1, 100, 200);
    let x = r * cos(a);
    let y = r * sin(a);
    vertex(x, y);
  }
  endShape(CLOSE);
  phase += 0.01;
  zoff += 0.01;
}
