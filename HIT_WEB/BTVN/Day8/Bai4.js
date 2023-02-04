//Viết hàm tính ra số chữ số lẻ của một số
function demSoLe(num)
{
    let dem = 0;
    while(num != 0)
    {
        if((num % 10) % 2 != 0 )
        {
            dem++;
        }
        // Lấy giá trị nguyên của num
        num = Math.floor(num / 10);
        num = parseInt(num);
    }
    return dem;
}

//Test
//Input: 12345
//Output: 3


count = demSoLe(12345);
console.log(count);

//Output: 11111112
//Output: 7

count = demSoLe(11111112);
console.log(count);

//Input: 22222222
//Output: 0

count = demSoLe(22222222);
console.log(count);