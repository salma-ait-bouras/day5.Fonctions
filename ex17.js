const describeAge = (age) => {
let n =0
    if( age < 18 )
    n="Minor" ;
else 
    n= "Adult";
return `you are a(n) ${n}`
};

console.log(describeAge(20));
