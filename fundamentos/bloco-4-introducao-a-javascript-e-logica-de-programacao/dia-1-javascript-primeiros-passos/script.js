const a= 10;
const b= 5;
const c= 17;

console.log(a+b)
console.log(a-b)
console.log(a*b)
console.log(a/b)
console.log(a%b)

if (a>b){
    console.log("a é maior")
}
else {
    console.log('b é maior')
}

if (a > b && a > c) {
    console.log('a é maior')
}
else if (b > a && b > c) {
    console.log('b é maior')
}
else {
    console.log('c é maior')
}

if (a>0) {
    console.log('positive')
}
else if (a<0) {
    console.log('negative')
}
else {
    console.log(0)
}


