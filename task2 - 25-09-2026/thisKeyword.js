const employee = {
    empid : 121,
    emp_firstName : "Bhuvaneshwari",
    emp_lastName : "Sankar",
    emp_fullname : function() {
        return this.emp_firstName+ " " +this.emp_lastName;
    },
    emp_address : {
        street : "South Yadavar Street",
        town : "Srivaikundam"
    },
    emp_experience : {
        company1 : "2022-2024",
        company2 : "2024-2026"
    },
    emp_salary : {
        basic : 25000,
        hra : 5000, 
        da : 3000,
        fa : 2000,
        pf : 1800,
        pt : 200
    }
};

const totalSalary = (employee) => {
    const total = employee?.emp_salary?.basic +
                  employee?.emp_salary?.hra +
                  employee?.emp_salary?.da +
                  employee?.emp_salary?.fa -
                  employee?.emp_salary?.pf -
                  employee?.emp_salary?.pt;

    return total;
}


console.log("Employee Name: ",employee?.emp_firstName+ " " +employee?.emp_lastName)
console.log("Full Name: ",employee?.emp_fullname())
console.log("Employee Address: ", employee?.emp_address?.street+ " " +employee?.emp_address?.town)
console.log("Experience: ", employee?.emp_experience?.company1)
console.log(totalSalary(employee));