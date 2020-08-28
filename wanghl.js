var t = readline() - 0;
var arr2 = [];
var i = 0;
var s = '';
var n = 0;
var s = 0;
var arr = [];
for (i = 0; i < t; i++) {
  s = readline().split(" ");
  n = s[0] - 0;
  k = s[1] - 0;
  location = [];
  var arr = [];
  sr = readline().split(" ");
  for (i = 0; i < k; i++) {
    location.push(sr[i] - 0);
  }
  arr.push(location[0] - 1);
  if (k > 1) {
    for (i = 0; i < k - 1; i++) {
      arr.push(location[i + 1] - location[i]);
    }
  }
  arr.push(n - location[k - 1]);
  for (i = 0; i < arr.length; i++) {
    if (i == 0 || i == arr.length - 1) {
      arr[i]++;
    }
    else {
      arr[i] = Math.ceil((arr[i] - 1) / 2) + 1;
    }
  }
  arr2.push(Math.max(...arr));
}
arr2.forEach(e => {
  print(e);
})