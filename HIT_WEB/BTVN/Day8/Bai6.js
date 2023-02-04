// Viết hàm chèn 1 chuỗi bất kỳ vào một chuỗi cho trước ở vị trí cụ thể
// Mặc định chèn ở vị trí đầu tiên.

const InsertString = (str1, str2, address) =>
{
    if(str2 == null && address == null) return str1;
    if(address == null) address = 0;
    return str1.substring(0, address) + str2 + str1.substring(address);
}

//test
console.log(InsertString('We are doing some exercises.'));
//Output: We are doing some exercises.
console.log(InsertString('We are doing some exercises.','JavaScript '));
//Output: Javascript We are doing some exercises.
console.log(InsertString('We are doing some exercises.','JavaScript ',18));
//Output: We are doing some JavaScript exercises.