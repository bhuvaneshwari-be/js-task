function refactoringChallenge() {
    var membershipType = "Silver";
    var totalSpent = 12000;
    var discount = 0;

    if(membershipType === "Gold"){
        if(totalSpent >= 10000){
            discount = 20;
        } else {
            discount = 15;
        }
    }

    else if(membershipType === "Silver"){
        if(totalSpent >= 10000){
            discount = 15;
        } else {
            discount = 10;
        }
    }

    else if (membershipType === "Regular"){
        if(totalSpent >= 10000){
            discount = 10;
        } else {
            discount = 5;
        }
    }

    else {
        console.log ("Invalid MemberShip Type")
    }

    return console.log("Discount: " + discount + "%");
}

refactoringChallenge();
