const userProcessing = (name, age) => {
    const formatName = (name) => {
        return name.toUpperCase();
    }

    const validateAge = (age) => {
        return age >= 18;
    }

    console.log("Name: ",formatName(name));
    console.log("Age: ",validateAge(age));
}

userProcessing("bhuvana", 21);