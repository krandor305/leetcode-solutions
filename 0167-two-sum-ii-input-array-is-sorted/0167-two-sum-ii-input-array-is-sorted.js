/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    var res = [];
    var ind = numbers.length-1
    var i =0
    while(i<ind)
        {
            if(numbers[i] + numbers[ind] == target)
            {
                return [i+1,ind+1]
            }
            else if(numbers[i] + numbers[ind] < target)
            {
                i++
            }
            else
            {
                ind--
            }
        }
    return res;
};