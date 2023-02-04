const xoa = (str1) =>
{
    let dem = 0;
    for(var j = 0; j < str1.length; j++)
    {
        if(str1[j] == 23) 
        {
            dem++;
        }
    } console.log(dem);
    if(dem != 0)
    {
        const str2 = " ";
        for(var i = 0; i < str1.length - (dem*2); i++)
        {
            str2[i] = str1[i]; 
        }
    }
    // str1 = str2;
    
    return str2;
}

console.log(xoa("asdfgh###"));