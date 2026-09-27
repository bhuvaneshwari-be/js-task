// Normal Function 1

function firstOne(){
    var a = 10;
    var b = 20;

    var result = a+b;

    console.log("AdditionResult N =====>", result);
}

firstOne();


// Arrow Function 1

const add = () => {
    var a = 30;
    var b = 20;

    var result = a+b;

    console.log("AdditionResult A ====>", result);
}

add();


//Normal function 2

function secondOne(a,b) {
    var result = a-b;

    console.log("SubtractionResult N =====>", result)
}

secondOne(50,100);


//Arrow function2

const subtract = (a,b) => {
    var result = a-b;
    console.log("SubtractionResult A =====>", result);
}

subtract(1000,100);