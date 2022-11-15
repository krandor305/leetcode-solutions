/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    
    var containsZero = 0
    var sum = 1
    for(var i=0;i<nums.length;i++)
    {
        if(nums[i] == 0)
        {
            containsZero++
        }
        sum*=nums[i]?nums[i]:1
    }
    
    if(containsZero>1)
    {
        return Array(nums.length).fill(0)
    }
    
    console.log(containsZero)
    
    if(containsZero==1)
    {
        console.log(nums)
        for(var i=0;i<nums.length;i++)
        {
            if(nums[i] == 0)
            {
                nums[i] = sum
            }
            else
            {
                nums[i] = 0
            }
        }
        return nums
        
    }
    
    var sum = 1
    for(var i=0;i<nums.length;i++)
    {
        sum*=nums[i]
    }
    
    var res = Array(nums.length).fill(sum)
    
    console.log(res)
    
    for(var i=0;i<nums.length;i++)
    {
        if(nums[i] == 0)
        {
            nums[i] = 1
        }
        res[i]/=nums[i]
    }
    
    return res
};