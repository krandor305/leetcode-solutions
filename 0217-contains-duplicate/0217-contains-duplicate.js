/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    var hash = {}
    for(var i=0;i<nums.length;i++)
    {   
        if(hash[nums[i]])
        {
            return true
        }
        else
        {
            hash[nums[i]] = 1
        }
    }
    return false
};