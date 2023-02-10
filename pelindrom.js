  let number = 123;

let temp = num;
let bag  = "";
while(temp>0){
 
let rem = temp%10;
bag = bag + rem;
temp = Math.floor(temp/10);
}

if(num==bag){
console.log("Yes");
}
else{
console.log("No");

}