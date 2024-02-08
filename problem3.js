function deleteInvalids(array){
    if(!Array.isArray(array)){
        const invalid = "Invalid Array";
        return invalid;
    }
    const integerNum = [];
    for (const numbers of array){
        if(typeof numbers === 'number' && !isNaN(numbers)){
            integerNum.push(numbers);
        }
        
       
    }
    return integerNum;
}

// const lists = [1 , null, undefined, 18, -19, NaN, "12", [1, 2], { ob: "lala" }];
// const numberArray = deleteInvalids(lists);
// console.log(numberArray);