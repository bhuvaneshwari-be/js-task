const userProfile = {
    name: "Bhuvaneshwari",
    age: 21,
    username: "bhuvana08",
    email: "bhuvaneshwari9042@gmail.com",
    location: "chennai",
    followers: 350,
    following: 600
}

console.log("Name: ",userProfile.name);
console.log("Email: ",userProfile.email);
console.log("Location: ",userProfile.location);
console.log("Follwers: ",userProfile.followers);
console.log("Following: ",userProfile.following);


console.log("Age: ",userProfile["age"]);
console.log("Username: ",userProfile["username"]);