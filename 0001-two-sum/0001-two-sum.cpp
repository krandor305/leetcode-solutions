class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        vector<int> result(2,0);
        int t;
        for(int i=0;i<nums.size();i++)
        {
            result.clear();
            t=target;
                t=target-nums[i];
                result.push_back(i);
                for(int j=i+1;j<nums.size();j++)
                {
                    if(nums[j]==t && i!=j)
                    {
                        result.push_back(j);
                        return result;
                    }
                    
                }
            }
        return result;
    }
};