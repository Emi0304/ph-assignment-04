function calculateMoney(ticketSale ){
    if(ticketSale >= 0){
        const spending = 500 + (8 * 50);
    const amount = ticketSale * 120;
    const save = amount - spending;
    return save;
    }
    else{
        const reply = "invalid number";
        return reply;
    }
}
// const output = calculateMoney(10);
// console.log(output);