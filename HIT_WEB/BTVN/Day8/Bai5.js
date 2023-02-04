//viết hàm đưa string về array
var str1 = "Hưng, Cương, Tài";


function strToArr(a,b)
{
    var mangChuoi = a.split(b);
    return mangChuoi;
}

console.log(strToArr(str1,", ")); 

//output: [ 'Hưng', 'Cương', 'Tài' ];

console.log(str1.slice(6,11));


// viết hàm getStr lấy ra tên trong chuỗi str1


// console.log(getStr(str1));

//output: Cương



var str2 = "    Dinh Tan Hung      ";

//từ chuỗi str2 viết hàm getUpperStr và getLowerStr lấy ra chuỗi viết hoa và viết thường

function getUpperStr(str)
{
    str = str.trim().toUpperCase();
    return str;
} 

console.log(getUpperStr(str2)) //output : DINH TAN HUNG

function getLowerStr(str)
{
    str = str.trim().toLowerCase();
    return str;
}

console.log(getLowerStr(str2)) //output : dinh tan hung