$( document ).ready(function() {
  "use strict"

  $("form").on("submit", function (event) {
    event.preventDefault();
    var numbers = $("input:first-child").val(),
        numArray = numbers.split(",").map( function (string) {
          return Number(string);
        })
    var sortedAry = mergeSort(numArray);

    $(".sorted-container").addClass("show-sorted");
    $(".sorted-container").prepend("<p>" + sortedAry.join(", ") + "</p><p>Sorted!</p>");
    $(".clear-btn").css("display", "inline-block");

  });

  $(".clear-btn").on("click", function (event) {
    $(".sorted-container").remove();

  });

  function mergeSort(numArray) {
    var len = numArray.length;
    if ( len < 2 ) {
      return numArray;
    }
    var mid = Math.floor(len / 2),
        left = numArray.slice(0, mid),
        right = numArray.slice(mid, len)

    return merge(mergeSort(left), mergeSort(right));
  };

  function merge( left, right ) {
    var results = [],
        l_len = left.length,
        l_cnt = 0,
        r_len = right.length,
        r_cnt = 0

    while ( l_cnt < l_len && r_cnt < r_len ) {
      if ( left[l_cnt] < right[r_cnt] ) {
        results.push(left[l_cnt++]);
      } else {
        results.push(right[r_cnt++]);
      }
    }
    return results.concat(left.slice(l_cnt)).concat(right.slice(r_cnt));
  };

});
