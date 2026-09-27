//global scope

let name = "Bhuvana";

const details = () => {

    //local scope
    var age = 21;
    var address = "102, South Yadavar Street, Srivaikundam";
    var district = "Thoothukudi";

    console.log("Name: ",name);
    console.log("Age: ",age);
    console.log("Address: ",address);
    console.log("District: ",district);
}

// console.log("Age: ",age);    this is declared in local scope cannot be accessed outside
// console.log("Address: ",address);

details()