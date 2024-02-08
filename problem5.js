function monthlySavings(arr , livingCost){

    

    if(!Array.isArray(arr) || typeof livingCost !== 'number'){
        const show = 'invalid';
        return show;
        
    }
    const payments = arr.reduce((acc,curr) => acc + curr , 0);
    const tax = payments > 3000 ? 0.2 * payments : 0;
    const savings = payments - tax - livingCost;

    if(savings >= 0){
        return savings;
    }
    else{
        return 'earn more';
    }
}

// const array = [1000 , 5000 ,1000];
// const livingCost = '3956';
// const man = monthlySavings(array, livingCost);
// console.log(man);

