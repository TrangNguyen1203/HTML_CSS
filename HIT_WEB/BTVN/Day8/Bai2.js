const obj = {
    name:"Trang",
    age : 19,
    class: "KTPM03"
};
const mang = [];

function run(obj)
{
    
    for(let i in obj)
    {
        mang.push(i + ":" + obj[i]);
    }
    return mang;
}

console.log(run(obj));
// console.log(typeof(mang));

// output: 
// [ 'name:Trang', 'age:19', 'class:KTPM03' ]
// object