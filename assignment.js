//Feet to Mile Conversion
function feetToMile(feetValue){
    if(feetValue<1){
        return "please enter a value which is greater than zero";
    }
    const mileValue=feetValue/5280;
    return mileValue;
}
var value=feetToMile(5280);
console.log(value);




//Wood Calculator
function woodCalculator(chair,table,bed){
    if(chair<0 || table<0 || bed<0){
        return "please enter positive value";
    }
    const chairs=chair*1;
    const tables=table*2;
    const beds=bed*5;
    let total=chairs+tables+beds;
    return total;
}
var woodValue=woodCalculator(5,2,3);
console.log(woodValue);




//Brick Calculator
function brickCalculator(buildingHeight){
    if(buildingHeight<1){
        return "please enter positive value";
    }
    let height=buildingHeight;
    let brickCount=0;
    if(height>10){
        height=height-10;
        brickCount=10*15*1000;
    }
    else{
        brickCount=height*15*1000;
        return brickCount;
    }
    if(height>10){
        height=height-10;
        brickCount=brickCount+(10*12*1000);
    }
    else{
        brickCount=brickCount+(height*12*1000);
        return brickCount;
    }
    return brickCount=brickCount+(height*10*1000);  
}
var total=brickCalculator(0);
console.log(total);