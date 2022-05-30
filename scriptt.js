//filter , forEach


// let nums = [2,5,3,6,4,5,8,2]

//  console.log( nums.filter(n => n%2===0))

// nums.forEach(n =>{
//     console.log(n)
// })


let num = new Set("PPaavvn");

num.add(3);
num.add(4);
num.add(3);
num.add(5);
num.add(6);
num.add("pavan");
num.add("pavan");

console.log(num.has(2));
num.forEach(value =>{
    console.log(value)

})