/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    
    var hash = {}
    
    if(t.length!=s.length)
        {
            return false;
        }
    
    for(var i=0;i<s.length;i++)
    {
        if(hash[s[i]])
        {
           hash[s[i]]++;
        }
        else
        {
            hash[s[i]] = 1
        }
    }
    
    for(var i=0;i<t.length;i++)
    {
        if(!hash[t[i]])
        {
            return false
        }
        else
        {
            if(hash[t[i]] == 0)
            {
                return false
            }
            hash[t[i]]--
        }
    }
    
    return true;
    
};