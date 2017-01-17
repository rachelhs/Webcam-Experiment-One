var capture;

function setup() {
  createCanvas(windowWidth, windowHeight);
  capture = createCapture(VIDEO);
  capture.hide();
  capture.size(640, 360);
}

function draw() {

  push();
  translate(capture.width, 0);
  scale(-1, 1);
  image(capture, 0, 0);
  filter('THRESHOLD');
  pop();

  findEdge();
}

function findEdge() {

  loadPixels();
  for (var y = 1; y < height - 1; y++) {
    for (var x = 1; x < width - 1; x++) {
      var loc = (x + y * width) * 4;
      var left = loc - 4;
      var lo = pixels[loc];
      var l = pixels[left];
      if (abs(lo - l) > 10) {
        ellipse(x, y, 20, 20);
      }
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
