var img1, img2, img3;
var potter;
var counter = 0;
var x1, y1, x2, y2, x3, y3;
var potterClicked1 = false;
var potterClicked2 = false;
var potterClicked3 = false;

function preload() {
  img1 = loadImage("./images/castle.jpg");
  img2 = loadImage("./images/forest.jpg");
  img3 = loadImage("./images/village.jpg");
  potter = loadImage("./images/potter.png");
}

function setup() {
  createCanvas(640, 360);
  x1 = (width/2) - 200;
  y1 = height/2;
  x2 = width/2;
  y2 = height/2;
  x3 = (width/2) + 200;
  y3 = height/2;
}

function draw() {
  noTint();
  imageMode(CORNER);
  if (counter == 0) {
    image(img1, 0, 0, width, height);
  } else if (counter == 1) {
    image(img2, 0, 0, width, height);   
  } else if (counter == 2) {
    image(img3, 0, 0, width, height);    
  }
  
  imageMode(CENTER);
  if (potterClicked1) {
    tint(255,0,0);
  } else {
    noTint();
  }
  image(potter, x1, y1);
  
  if (potterClicked2) {
    tint(255,0,0);
  } else {
    noTint();
  }
  image(potter, x2, y2);
  
  if (potterClicked3) {
    tint(255,0,0);
  } else {
    noTint();
  }
  image(potter, x3, y3);
}

function mousePressed() {
  if (hitDetectImage(mouseX, mouseY, x1, y1, potter)) potterClicked1 = true;
  if (hitDetectImage(mouseX, mouseY, x2, y2, potter)) potterClicked2 = true;
  if (hitDetectImage(mouseX, mouseY, x3, y3, potter)) potterClicked3 = true;
  
  if (potterClicked1 && potterClicked2 && potterClicked3) {
    counter++;
    if (counter > 2) {
      counter = 0;
    }
    potterClicked1 = false;
    potterClicked2 = false;
    potterClicked3 = false;
  }
}


