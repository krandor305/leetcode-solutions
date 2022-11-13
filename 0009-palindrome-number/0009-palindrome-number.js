/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    var str = x.toString()
    
    for(var i = 0 ;i<Math.ceil(str.length/2);i++)
    {
        if(str[i] != str[str.length-i-1])
            {
                return false
            }
    }
    return true
};