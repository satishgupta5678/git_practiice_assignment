let num=13;
let bag="";
for(let i=2;i<=num;i++){
if(num%i==0){
bag=bag+i}
}
if(num==bag){
console.log(yes)
}else{
console.log(no)
}