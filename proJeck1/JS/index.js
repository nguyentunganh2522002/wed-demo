// BÀI1 các loại dunction
// 1, declaration
// 2, expression
// 3, arrow ( gọi trước khi đc định nghĩa)


/* 
vidu 3 (gọi đuược số 1 chứ không gọi đc số 2)
showMesssage(); 


vidu 1 và 2 
function showMessage(){
    console.log('declaration');
}
var showMessage2 = function(){
    console.log(' exprassion');
}

setTimeout(function autoLogin(){

});

var myOject ={
    myFunction: function(){

    }
}
*/

/* BAI2 Oject trong js

var emailKey = 'email' // ta tạo ra biến mới chứa giá trị key 

var myInfo = {
    name: 'Son Dang', //key của biến dùng dấu :
    age: 18,
    address: 'Ha Noi, VN',
    [emailKey]: 'sondangfullstack.edu.vn' //ta thêm biến vào có giá trị key
    getName: function(){
        return this.name; // thêm function vào biến ta cũng lấy giá trị name đc in ra
    }
};

console.log(myInfo.getName()); //gọi function có giá trị name biến myInfo

//  myInfo.email = 'sondangfullstack.edu.vn';  cách 1 thêm ky email vào biến myInfo 
// myInfo['email'] = 'sondangfullstack.edu.vn'; cách 2 thêm email vào biến myInfo

// console.log(myInfo.age); cách 1 lấy gía trị của key age
// console.log(myInfo['age']); cách 2 lấy giá trị key age
console.log(myInfo); 

/ vd2
var myKey = 'age'; ta tìm giá trị key age qua tính chất bắc cầu , ta tạo ra một biến mới có string là key age
console.log(myInfo[myKey]);
/ vd3 ta xoá key
delete myInfo.age;
*/ 

/*BÀI3 Oject constructor tạo ra mọt hàm tạo

function User(firstName, lastNme, avatar){
    this.firstName = firstName;
    this.lastNme = lastNme;
    this.avatar = avatar;

    this.getName = function(){
        return `${this.firstName} ${this.lastNme} `;
    }
}


var User1 = new User('Sơn', 'Đặng', 'Avarta1');
var User2 = new User('Vũ', 'Nguyễn', 'Avarta2');

User1.title = 'chia sẻ đào tạo F8';
User2.comment = 'liệu có khoá app k ad';

//console.log(User1.className);
//console.log(User2.getClassName());
*/
/*BÀI4 Oject prototype thêm vào một hàm tạo

User.prototype.className = 'F8';  //thêm thuộc tính vào user 
User.prototype.getClassName = function() {
    return this.className;
}

console.log(User1.className);
console.log(User2.getClassName());
*/
/*BÀI5  đối tượng Date lấy thời gian ngày tháng năm giờ phút giây

var date = new Date();

var year = date.getFullYear():
var month = date.getMonth():
var day = date.getDay():

console.log(`${day}/ ${month}/ ${year}`;
*/

/* BÀI6 câu lệnh rẽ nhánh if - else
//đúng sai thì dùng if - else
var date = 2;
 
if (date === 2) {
    console.log('Hôm nay là thứ 2');
}else if (date === 2) {
    console.log('Hôm nay là thứ 2');
}else if (date === 2) {
    console.log('Hôm nay là thứ 2');
} else{
    console.log('không biết');
}
*/

/*BÀI 7 CÂU LỆNH RẼ NHÁNH SWITCH
//từ 3 case trở lên thì ta dùng switch

var date = 9;

switch(date){
    case 2:
        console.log('Hôm nay là thứ 2');
        break;
    case 3:
        console.log('Hôm nay là thứ 3');
        break;
    case 4:
        console.log('Hôm nay là thứ 4');
        break;
    case 5:
        console.log('Hôm nay là thứ 5');
        break;
    default:
        console.log('không biết');
}
*/

/* bài 8 vòng lặp

1. for lặp với điều kiện đúng 
2. for/in lặp key đối tượng
3. for/of lặp qua value cảu đối tượng
4. while lặp khi điều kiện đúng
5. do/while lặp ít nhất 1 lần , sau đó lặp khi điều kiện đúng
*/

/*vd1 vòng lặp for lặp với điều kiện đúng for loop

 var myArray = [
    'js',
    'php',
    'java',
    'Dart', 
    'ruby',
    'Python'
 ];

var arrayLength = myArray.length;

for (var i = 0; i < arrayLength; i++) {
    console.log(myArray[i]);
}
*/
 
//vd 2 for/in lặp key đối tượng 

 //var myString = 'javascript'; // lấy ra các chứ cái của value
// console.log(myString[2]);
 

/*var myInfo = {
    name: 'Son Dang',
    age: 18,
    address: 'Ha Noi, VN'
};

for (var key in myInfo) {
    console.log(myInfo[key]);
}

var lenguages = 'javascript';
for (var key in lenguages) {
    console.log(lenguages[key]); // ta cũng vòng lặp đc cái chứ cái trong trong for
}
*/
 
// vd 3 for/of loop
/*var lenguages = [  //không lăpj đc với Object
    'js',
    'php',
    'java',
 ];

 for (var value of lenguages) {
    console.log(value);
 }
 

 var myInfo = { // ta lặp đối với Object
    name: 'Son Dang',
    age: 18
 }

 for (var value of Object.values(myInfo)) { // muốn tìm keys cũng vậy ta chỉ thay values bằng keys là đc
    console.log(value);
 }
 */

// vd4 while loop
/*var i = 1;

while (i <= 1000) {
    
    console.log(i);
    i++;
}
*/
/* vd về mảng while
var myArray = [
    'js',
    'php',
    'ruby'
]
var i = 0;
while (i < myArray.length){
    console.log(myArray[i]);
    i++;
}
*/
 
/*VIDU 5 do/while 

var i = 0;
var isSuccess = false;

do {
    i++;

    console.log('nap the lan ' +i);

    if (false){ //nap the thanh cong
        isSuccess = true;
    }
} while (isSuccess && i < 3);
*/

// bài 9 break và continue trong vòng lặp
/*vd break
for (var i = 0; i < 10; i++) { //break
    console.log(i);

    if(i >= 5) {
    break;
    }
}
*/
/*vd 2 continue 
// vd tìm số chắn 
for (var i = 0; i < 10; i++) { 
    if (i%2 !== 0){
        continue;
    }
    console.log(i);
}
*/
/* bài 10 vòng lặp lồng nhau
var myArray = [
    [1, 2],
    [3, 4],
    [5, 6]
];
for (var i = 0; i < myArray.length; i++) {
    for (var j = 0; j < myArray[i].length; j++){
        console.log(myArray[i][j]);
    }

}
*/
// bài 11 hiểu thêm về vòng lặp 
// vd 1 
// /for (var i = 100; i > 0; i--){ // ta in ngược từ 100 về 0
    // console.log(i);
// }

//vd 2
// for(var i = 0; i <= 100; i += 5 ) { //ta in ra 0 10 15 cách nhau 5 đơn vị
    // console.log(i);
// }

// BÀI 12 LÀM VIỆC VỚI MẢNG phần 2
/*
    Array methods:
        forEach()
        every()
        some()
        find()
        filter()
        map()
        reduce()
*/

