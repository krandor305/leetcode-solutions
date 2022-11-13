/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
var carFleet = function(target, position, speed) {
    
    
    position = position.map(function(value,index){
        return [value,speed[index]]
    }).sort(function(a,b){
        return b[0]-a[0]
    }).map(function(value){
        return (target-value[0])/value[1]
    })
    
    var fleets = 0;
    var previous = 0;
    console.log(position)
    for(var i=0;i<position.length;i++)
    {
        if(previous<position[i])
        {
            fleets++;
            previous = position[i]
        }
    }
    return fleets;
};