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