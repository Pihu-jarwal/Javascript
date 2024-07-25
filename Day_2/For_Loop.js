for(let i=0; i<10; i++){
    console.log(i)
}

// sum of the number using for loop
let sum =0;
for(let i=0; i<20; i++){
    sum = sum + i+1;
}
console.log(sum);


//Print marks of a student using for loop

const obj ={
    herry : 98,
 rohan : 45,
 akash : 33
}

for(let i=0; i<Object.keys(obj).length; i++){
    console.log(" marks of the students" , Object.keys(obj)[i]  + "are" + " " + obj[Object.keys(obj)[i]])
}


for(let i in Object.keys(obj)){
    console.log(" marks of the students" , Object.keys(obj)[i]  + " " +"are" + " " + obj[Object.keys(obj)[i]])

}
let i = prompt("hello")