/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    var i=0;
    var looping = true;
    while(looping)
      {
        if(strs[0][i])
        {
            var char = strs[0][i]
        }
        else
        {
            looping = false;
            break;
        }
        
        for(var j=0;j<strs.length;j++)
        {
            if(!strs[j][i] || strs[j][i]!=char)
            {
                looping = false;
                break
            }
        }
          
        if(looping == false)
        {
            break;
        }
        i++;
      }
    
    if(i==0)
    {
        return ''
    }
    return strs[0].substring(0,i)
};