+) var :1 biến có thể khai báo nhiều lần, và mỗi lần khai báo thì nó sẽ cập nhập giá trị theo biến được khai báo cuối cùng kể cả ở trong khối hay không; Nhược điểm: nếu ta code nhiều dòng mà không biết biến ý dùng chưa mà khai báo lại thì sẽ gây ảnh hưởng dữ liệu và các phép tính dùng với biến đó ở trên sẽ bị thay đổi kết quả, chính vì vậy mà let ra đời.
+) let: 1 biến chỉ khai báo 1 lần và nếu var khai báo biến đó rồi thì let không khai báo được biến đó nữa,tuy nhiên biến đó có thể khai báo lặp lại trong mỗi khối, mỗi khối chỉ khai báo một lần, kể cả bên ngoài có khai báo rồi, ta có thể hiểu như sau: biến x khai báo bên ngoài hàm là biến cục bộ, và biến x khai báo bên trong hàm là biến địa phương, thoát ra khỏi hàm biến đó biến mất và giá trị của nó không làm ảnh hưởng đến biến x cục bộ bên ngoài , các biến x trong mỗi hàm chỉ là duy nhất, không có gì thay thế được nó nữa.;
VD:
-----------VAR------------------ 
+) var x = 12;
   var x = 13;
   console.log(x); kết quả là : 13;

+) var x = 13;
   if(true)
   {
      var x = 12;
   }
   if(true)
   {
      var x = "Hello World"
   }
   console.log(x); // kq: Hello World


-----------LET----------------- 
+) let x = 12;
   let x = 13; 
   console.log(x);
   ---> Lỗi: Identifier 'x' has already been declared


+) var x = 12;
   let x = 13; 
   console.log(x);
   ---> Lỗi: Identifier 'x' has already been declared

+) 
   if(true)
   {
      let x = 12;
      console.log(x);
   }
   if(true)
   {
       let x = "Hello World"
       console.log(x);
   }
   -- kq: 12
          Hello World;
   
   
+) let x = 16;
   if(true)
   {
      let x = 12;
   }
   if(true)
   {
      let x = "Hello World"
    
   }
   console.log(x);
   // kq: 16

- const: khai báo hằng, khi 1 biến được khai báo với const thì nó không thể thay đổi giá trị được nữa, trừ mảng và object, và khi khai báo với const cũng chỉ được khai báo một lần thôi

VD: const x = 12;
    x = 13;
    console.log(x);
    kq: TypeError: Assignment to constant variable.

- Biểu thức điều kiện if - else
if(ĐK)
{
   lệnh1
}else {
   lệnh2
}

- Nếu ĐK đúng thì lệnh1 thực hiện ngược lại lệnh2 thực hiện.
- Các trường hợp sai khi ĐK bằng các giá trị bên dưới và đúng trong các trường hợp còn lại:
null
NaN
undefined
0
"", ''
false



