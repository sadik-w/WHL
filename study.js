var a=parseInt(readline());
var b=parseInt(readline());
var time=0;
var location=parseInt(readline()).split(" ");
var len =location.length;
var arr=[];
arr.push(location[0]-1);
if(location.length>1){
  for(let i=0;i<location.length-1;i++){
    arr.push(location[i+1]-location[i]);
  }
}
arr.push(a-location[len-1]);

for(let i=0 ;i<arr.length;i++){
  if(i==0||i==arr.length-1){
    arr[i]++;
  }
  else{
    arr[i]=Math.ceil((arr[i]-1)/2)+1;
  }
}
print(Math.max(...arr));