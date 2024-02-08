function checkName(name){
    const nameLength = name.length;


    if(name[nameLength-1] === 'a' || name[nameLength-1] === 'y' || name[nameLength-1] === 'e' || name[nameLength-1] === 'o' || name[nameLength-1] === 'u' || name[nameLength-1] === 'w'){
        const show = "good name";
        return show;

    }
    else if (name[nameLength-1] === 'A' || name[nameLength-1] === 'Y' || name[nameLength-1] === 'E' || name[nameLength-1] === 'O' || name[nameLength-1] === 'U' || name[nameLength-1] === 'W'){
        const show = "good name";
        return show;

    }
    else if(typeof name !== "string"){
        const show = "invalid";
        return show;
    }
    else{
        const output = "bad name ";
        return output;
    }
}
// const output = checkName('Salman');
// console.log(output);

