/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    var hash = {}
    for(var i=0;i<nums.length;i++)
    {
        if(hash[nums[i]])
        {
            hash[nums[i]]++
        }
        else
        {
            hash[nums[i]]=1
        }
    }
    
    var res = []
    while(k--)
    {
        var max = 0;
        var maxKey = -1
        for(var key in hash)
        {
            if(hash[key]>max)
            {
                max = hash[key]
                maxKey = key
            }
        }
        hash[maxKey] = 0
        res.push(maxKey)
        
    }
    return res
    
};
