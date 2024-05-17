 
var d = 8;
var n = 5;
var sliderD;
var sliderN;

function setup() {
  createCanvas(windowWidth, windowHeight);
  sliderD = createSlider(1, 10, 5, 1);
  sliderN = createSlider(1, 10, 5, 1);
}

function draw() {
  background("#000000");
  textSize(9);
  noFill();
  noStroke;
  text("hint :  move the sliders",windowWidth/2.1, .9*windowHeight); 
  
  fill("#000000");
  translate(windowWidth/2.3, windowHeight/1.8);
  d = sliderD.value();
  n = sliderN.value();
  k = n / d; 

  beginShape();
  for (var a = 0; a < TWO_PI * d; a += 0.001) {
    var r = 150 * cos(k * a);
    var x = r * cos(a);
    var y = r * sin(a);
    stroke("#ffffff");
    strokeWeight(1);
    vertex(x, y);
  }
  endShape(CLOSE);
}
