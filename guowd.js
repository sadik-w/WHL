var input = [];
input.push(readline());
for (var i = 0; i < 2 * number; i++) {
  input.push(readline());
}
getTime(input);

function getTime(input) {
  var number = input[0]-0;
  var gardenLength = 0;
  var waterNumber = 0;
  var waterPosition = "";
  var inputArrayOne = [];
  var inputArrayTwo = [];
  var time = [];
  for (var i = 0; i < number; i++) {
    inputArrayOne = input[1 + 2 * i].split(" ");
    inputArrayTwo = input[2 + 2 * i].split(" ");
    gardenLength = parseInt(inputArrayOne[0]);
    waterNumber = parseInt(inputArrayOne[1]);
    waterPosition = inputArrayTwo;
    for (var j = 0; j < waterNumber - 1; j++) {
      time.push(Math.ceil((waterPosition[j + 1] - waterPosition[j] - 1) / 2));
    }
    time.push(waterPosition[0] - 1);
    time.push(gardenLength - waterPosition[waterPosition.length - 1]);
    print(Math.max(...time) + 1);
    time = [];
  }
}