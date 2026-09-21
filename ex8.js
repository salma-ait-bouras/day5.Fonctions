function maxOfThree(a, b, c){
    let max =0
    if (a>b&&a>c)
        return a
    else if (b>a && b>c)
        return b
    else 
        return c
}
console.log(maxOfThree(4, 9, 3))