function  password(obj) {
    const siteName = obj['siteName'][0].toUpperCase()  ;

    const minus = obj['siteName'].slice(1);
    const name = siteName + minus;
    
    
    const birth = obj['birthYear'].toString();
    const length = birth.length;
    

    const pass = name +'#' + object.name + '@' + object.birthYear;
    
    
    if(length === 4 ){
        return pass;
    }
   
    else{
        return 'invalid'
    }
    
    
}

const object = { name: "kolimuddin" , birthYear: 9999 , siteName: "google" };
const details = password(object);
console.log(details);