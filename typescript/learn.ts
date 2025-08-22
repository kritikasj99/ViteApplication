//console.log("hello world");

//let a:number=10;
//let b:number=20;
//let c:any=a+b;
//console.log(c);

let sum=0;
function add(a:number,b:number,c:number=5,...bachahua:number[]){
    sum=a+b+c;
    return sum;
}

console.log("sum=",add(10,20));