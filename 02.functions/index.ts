// Regular Func

function RegularFunc(a: number, b:number) {
    return a+b
}
console.log(RegularFunc(15, 47))

// Arrow Func

const ArrowFunc =(a: number)=> {
    console.log("Salom. Dunyo?")
}
ArrowFunc(25)

// Return Value

function ReturnValue(a:number, b: number): string {
    return `${a}, ${b}`
}
console.log(ReturnValue(25, 585))

// arrow func return value

const ArrowFuncReturn = (a: number, b: number): number => a+b
console.log(ArrowFuncReturn(125, 552))