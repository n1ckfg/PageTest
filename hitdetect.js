// 2D RECTANGLE hit detect: xy, wh of object 1; xy, wh of object 2; assumes center.
function hitDetectRect(x1, y1, w1, h1, x2, y2, w2, h2) {
  w1 /= 2;
  h1 /= 2;
  w2 /= 2;
  h2 /= 2; 
  if ( x1 + w1 >= x2 - w2 && 
       x1 - w1 <= x2 + w2 && 
       y1 + h1 >= y2 - h2 && 
       y1 - h1 <= y2 + h2 ) 
  {
    return true;
  } else {
    return false;
  }
}

// 2D CIRCLE hit detect: xy, diameter of object 1; xy, diameter of object 2; assumes center.
function hitDetectCircle(x1, y1, d1, x2, y2, d2) {
  d1 /= 2;
  d2 /= 2;
  if (dist(x1, y1, x2, y2) < d1 + d2) {
    return true;
  } else {
    return false;
  }
}

// 2D IMAGE hit detect: xy of object 1; xy, wh of object 2; assumes center.
function hitDetectImage(x1, y1, x2, y2, img) {
  if (this.hitDetectRect(x1, y1, 1, 1, x2, y2, img.width, img.height)) {
    var xLoc = constrain((x1 - x2) + (img.width/2), 0, img.width-1);
    var yLoc = constrain((y1 - y2) + (img.height/2), 0, img.height-1);
    //var loc = xLoc + (yLoc * img.width);
    //var c = img.pixels[loc];
    var c = img.get(xLoc, yLoc);
    if (alpha(c) > 0) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }  
}
