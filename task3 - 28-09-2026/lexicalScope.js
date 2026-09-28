let globalMessage = "I am a global scope";

function outerFunction() {
    let outerMessage = "I am inside outerfunction";

    function innerFunction() {
        let innerMessage = "I am inside innerfunction";
        
        console.log("GlobalScope: ",globalMessage);
        console.log("OuterFunction: ",outerMessage);
        console.log("InnerMessage: ",innerMessage);

    }
    console.log("InnerMessage: ",innerMessage); //it will show an error because it is inside the innerFunction() cannot be accessed outside the innerFunction()
    console.log("OuterFunction: ",outerMessage);

    innerFunction();
}

outerFunction();