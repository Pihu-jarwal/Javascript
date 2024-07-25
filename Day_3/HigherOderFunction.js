function add(a,b){
    return a+b
}

function sub(a,b){
    return a-b
}

//High order function 
//Function that accepts functions as argument or return functions or both
function perfomOperation(func, a, b){
    let result = func(a,b)
   console.log(result)
}

perfomOperation(add , 4, 5);
perfomOperation(sub , 4, 5);


//Write a higher-order function that takes a function and a number, and calls the
//function with that number.


function HighOrderFunction(func1 , c ,e){
 let res= func1(c , e)
return res
}


const l = (x,y) =>{
    let m= y*x*3;
    console.log(m)
}

HighOrderFunction(l , 4 , 3);

