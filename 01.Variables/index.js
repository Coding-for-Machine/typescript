// Primitive Tiplar: Copy by Value
// strings
var myName = "Asadbek";
console.log(myName);
var myEmail = "codingformachine@gmail.com";
console.log(myEmail);
var is_active = true;
console.log(is_active);
// Numbers
var age = 25;
console.log(age);
// boolean
var isHard = false;
isHard = true;
console.log(isHard);
/*
Type inference — bu
TypeScript dasturlash tilida
o'zgaruvchining tipini
avtomatik ravishda aniqlash
jarayoni. TypeScript o'zgaruvchining qiymatini
ko'rib chiqib, unga mos bo'lgan tipni
taxmin qiladi. Buning natijasida, ko'pincha
tipni aniq belgilash shart bo'lmaydi,
chunki TypeScript o'zi tipni aniqlay oladi.

*/
var age = 25; // TypeScript 'age' ni 'number' deb aniqlaydi
var name = "Alice"; // TypeScript 'name' ni 'string' deb aniqlaydi
