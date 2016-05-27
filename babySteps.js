var babySteps = function() {
  var babyArray = process.argv;
  var sum = 0;
  for (var i=2; i<babyArray.length; i++) {
    sum += +babyArray[i];
  };

  console.log(sum);
};

babySteps();