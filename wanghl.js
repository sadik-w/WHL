var input = [];
var number = parseInt(readline());
for (var i = 0; i < 2 * number; i++) {
  input.push(readline());
}
times(input,number);
function times(input,number) {
  var garden = 0;
  var water = 0;
  var position = '';
  var max = 0;
  for (var i = 0; i < number; i++) {
    max = 0;
    garden = input[2 * i].split(" ")[0]-0;
    water = input[2 * i].split(" ")[1]-0;
    position = input[2 * i + 1].split(" ");
    for (var j = 0; j < water - 1; j++) {
      if (Math.ceil((position[j + 1] - position[j] - 1) / 2) > max) {
        max = Math.ceil((position[j + 1] - position[j] - 1) / 2);;
      }
    }
    if(!position.includes('1')){
      if (position[0] - 1 > max) {
        max = position[0] - 1;
      }
    }
    if(!position.includes(garden)){
      if (garden - position[water - 1] > max) {
        max = garden - position[water - 1];
      }
    }
    print(max + 1);
  }
}