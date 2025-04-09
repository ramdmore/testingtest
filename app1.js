function cloureDemo(){
    const name = "Ram More";
    return function(){
        console.log(`my name is ${name}`)
    }
}
var res = cloureDemo()
res();