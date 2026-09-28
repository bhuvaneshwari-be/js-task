const userProfile = {
    name: "Bhuvaneshwari",
    age: 21,
    username: "bhuvana08",
    email: "bhuvaneshwari9042@gmail.com",
    location: "chennai",
    followers: 350,
    following: 600,
    phoneNumber: 9042388083,
    caption: "I am adequate as I am",

    displayFunction : function() {
        console.log(this.name);
        console.log(this.username);
    }
};

userProfile.displayFunction();