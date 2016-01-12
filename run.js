// Merge Sort algorithm

// function mergeSort( array ) {
//   var len = array.length,
//       mid = Math.floor( len / 2 ),
//       left = array.slice( 0, mid ),
//       right = array.slice( mid, len )
//   if ( len < 2 ) {
//     return array;
//   }
//   return merge( mergeSort(left), mergeSort(right) );
// }

// function merge ( left, right ) {
//   var result = [],
//       r_cnt = 0,
//       l_cnt = 0,
//       r_len = right.length,
//       l_len = left.length
//   while ( l_cnt < l_len && r_cnt < r_len ) {
//     if ( left[l_cnt] < right[r_cnt]) {
//       result.push(left[l_cnt++]);
//     } else {
//       result.push(right[r_cnt++]);
//     }
//   }
//   return result.concat(left.slice(l_cnt)).concat(right.slice(r_cnt));
// }

// console.log(mergeSort([200000, 6, 4, 2, 5, 6, 4, 5, 6 ,7,77, 777]))



// transofrm a array of objects into array of objects k, v

function fun(array) {
  var reformattedArray = array.map(function(obj){
    var newObj = {};
    newObj[obj.key] = String(obj.value);
    return newObj;
  });
  return reformattedArray;
}

console.log(fun([{key:1, value:10}, {key:2, value:20}, {key:3, value: 30}]));

// Permutation solution
// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

// Nesting challenge

function nest (string) {
  // sample input is "()()(())"
  var len = string.length; // 8
  if (!len) {
    return 1;
  }
  var stack = [];
  var matches = {
    "(" : ")"
  };
  for ( i=0; i < len; i++) {
    var currentChar = string[i];
    if ( matches[currentChar]) {
      stack.push(currentChar);
    } else {
      if (!stack.length) {
        return 0;
      }
      var prevChar = stack.pop();
      if (matches[prevChar] !== currentChar) {
        return 0;
      }
    }
  }
  if (stack.length) {
    return 0;
  } else {
    return 1;
  }
}

console.log(nest("(()()()()(()))"));




