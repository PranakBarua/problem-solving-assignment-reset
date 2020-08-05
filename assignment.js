//Feet to Mile Conversion
function feetToMile(feetValue){
    if(feetValue<1){
        return "please enter a value which is greater than zero";
    }
    const mileValue=feetValue/5280;
    return mileValue;
}
const value=feetToMile(100000);
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
const woodValue=woodCalculator(5,2,3);
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
const total=brickCalculator(11);
console.log(total);




//Tiny Friend searching
function tinyFriend(friendsList){
    var tiny=friendsList[0];
    for(var i=1;i<friendsList.length;i++){
        var friend=friendsList[i];
        if(friend.length<tiny.length){
            tiny=friend;
        }
    } 
    if(tiny==""){
        return "please make a friend list without empty string"
    }
    return tiny;
}
const friends=tinyFriend(["amir","sakiv","pranak","pro"])
console.log(friends)
