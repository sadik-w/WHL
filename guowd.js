var input = [];
var num = parseInt(readline());
input.push(num);
for (var i = 0; i < 2 * num; i++) {
  input.push(readline());
}
time(input);

function time(input) {
  var number = input[0] - 0;
  var garden = 0;
  var water = 0;
  var position = "";
  var arr = [];
  for (var i = 0; i < number; i++) {
    garden = parseInt(input[2 * i + 1].split(" ")[0]);
    water = parseInt(input[2 * i + 1].split(" ")[1]);
    position = input[2 * i + 2].split(" ");
    for (var j = 0; j < water - 1; j++) {
      arr.push(Math.ceil((position[j + 1] - position[j] - 1) / 2));
    }
    arr.push(position[0] - 1);
    arr.push(garden - position[water - 1]);
    print(Math.max(...arr) + 1);
    arr = [];
  }
}