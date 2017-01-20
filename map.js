// map

  var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  var results = numbers.map(function(num) {
    return num -= 2;
  });

  console.log(results);
