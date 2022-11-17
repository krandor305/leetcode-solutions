/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    var beg = 0;
    var end = nums.length-1
    var res;
    while(beg<=end)
    {
        res = Math.floor((beg+end)/2)
        if(nums[res] == target)
        {
            return res
        }
        else if(nums[res] < target)
        {
            beg = res+1
        }
        else
        {
            end = res-1
        }
        
    }
    
    if(target<= nums[res])
    {
        return res
    }
    else
    {
        return res+1
    }
    
};