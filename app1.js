function cloureDemo(){
    const name = "Ram More";
    return function(){
        console.log(`my name is ${name}`)
    }
}
var res = cloureDemo()
res();

function addTwoNumber(a,b){
    return a+b;
}
console.log(addTwoNumber(10,20));