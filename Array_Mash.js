/*
Mash 2 arrays together so that the returning array has alternating elements of the 2 arrays . Both arrays will always be the same length.

eg. [1,2,3] + ['a','b','c'] = [1, 'a', 2, 'b', 3, 'c']
*/

function arrayMash (array1, array2) {
    // do the mash
    let num = array1.length + array2.length;
    let arr = [];
    let index1 = 0;
    let index2 = 0;
    for (let i = 0; i < num; i++) {
      if (i%2 === 0) {
        arr.push(array1[index1]);
        index1++;
      } else {
        arr.push(array2[index2]);
        index2++;
      }
    }
    return arr;
  }