// Regular Func
function RegularFunc(a, b) {
    return a + b;
}
console.log(RegularFunc(15, 47));
// Arrow Func
var ArrowFunc = function (a) {
    console.log("Salom. Dunyo?");
};
ArrowFunc(25);
// Return Value
function ReturnValue(a, b) {
    return "".concat(a, ", ").concat(b);
}
console.log(ReturnValue(25, 585));
// arrow func return value
var ArrowFuncReturn = function (a, b) { return a + b; };
console.log(ArrowFuncReturn(125, 552));
