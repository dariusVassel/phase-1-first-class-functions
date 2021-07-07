function receivesAFunction(callback){
    callback();
}

function returnsAnAnonymousFunction(){
    return function(){
        console.log("Hello");
    }
}

function returnsANamedFunction(){
    return function razzle(){
        console.log("hey");
    }
}