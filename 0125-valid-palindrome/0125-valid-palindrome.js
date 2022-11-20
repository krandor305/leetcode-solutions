/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    
    s = s.toLocaleLowerCase()
    
    for(var i=0;i<s.length;i++)
    {
        ascii = s.charCodeAt(i)
        if((ascii < 97 || ascii > 122) && (ascii < 48 || ascii > 57 ) )
        {
            
            s = s.replaceAll(s[i],"");
        }
    }
    
    s=s.replaceAll('[','')
    s=s.replaceAll('"','')
    s=s.replaceAll(')','')
    s=s.replaceAll(' ','')
    s=s.replaceAll(',','')
    s=s.replaceAll("'",'')
    s=s.replaceAll("?",'')
    console.log(s)
    
    
    for(var i=0;i<s.length/2;i++)
    {
        if(s[i]!=s[s.length-i-1])
        {
            return false
        }
    }
    return true;
};