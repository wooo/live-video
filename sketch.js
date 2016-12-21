var video;

function setup() {
  createCanvas (320, 240);
  background (51);
  video = createCapture (VIDEO);
  video.size(320, 240);
}

function draw() {
  tint (200, 0, 100)
  image(video, 0, 0, mouseX, height)
}