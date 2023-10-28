/*
Write a function that returns the total surface area and volume of a box as an array: [area, volume]
*/

function getSize(width, height, depth) {
    return [2*(width*height+height*depth+width*depth), depth * height * width];
  }