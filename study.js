var t = parseInt(readline().split(" ")[0]);
var arr2 = []; var sr = ''; var i = 0; var n = 0; var s = []; var time = 0; var location = []; var len = 0; var arr = [];
for (i = 0; i < t; i++) {
  s = readline().split(" ");
  n = s[0] - 0;
  len = s[1] - 0;
  time = 0;
  sr = readline().split(" ");
  for (i = 0; i < len; i++) {
    location.push(sr[i] - 0);
  }
  arr = [];
  arr.push(location[0] - 1);
  if (location.length > 1) {
    for (i = 0; i < location.length - 1; i++) {
      arr.push(location[i + 1] - location[i]);
    }
  }
  arr.push(n - location[len - 1]);
  for (i = 0; i < arr.length; i++) {
    if (i == 0 || i == arr.length - 1) {
      arr[i]++;
    }
    else {
      arr[i] = Math.ceil((arr[i] - 1) / 2) + 1;
    }
  }
  arr2.push(Math.max(...arr));
  i = 0;
}
arr2.forEach(e => {
  print(e);
})