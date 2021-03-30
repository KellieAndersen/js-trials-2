"use strict";


// 1. isHometown

function isHometown(town){
    if(town === 'San Francisco'){
        return true;
    } else{
        return false;
    }

}

// 2. getFullName

const getFullName = (firstName, lastName)=>{
  return `${firstName} ${lastName}`;
};


// 3. calculateTotal

const calculateTotal = (basePrice, state, tax=0.05)=>{
    let subtotal = basePrice * (1 + tax);

    let fee = 0;
    if(state === 'CA'){
        fee = 0.03 * subtotal;
    }

}
