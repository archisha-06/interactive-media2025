var img, img2;
function preload() {
  img=loadImage("data/face.png");
  img2=loadImage("data/rainbow.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}


function draw() {
  if (mouseIsPressed){
  image(img, mouseX-50, mouseY-50, 100, 100/img.width*img.height);
}else {
  image(img2, mouseX-50, mouseY-50, 100, 100/img.width*img.height);
}
}
