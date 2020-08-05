//feet to mile conversion
function feetToMile(feetValue){
    if(feetValue<1){
        return "please enter a value which is greater than zero";
    }
    const mileValue=feetValue/5280;
    return mileValue;
}
var value=feetToMile(5280);
console.log(value);




//wood Calculator
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