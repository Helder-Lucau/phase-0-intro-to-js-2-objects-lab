// Write your solution in this file!
const employee = {
    name: "Sammy",
    streetAddress: "45 Broadway"
};
employee;

function updateEmployeeWithKeyAndValue(){
    const newEmployee = { ...employee};
    newEmployee["name"] = "Sam";
    newEmployee["streetAddress"] = "11 Broadway";
    return newEmployee;
} 

function destructivelyUpdateEmployeeWithKeyAndValue(){
    employee["name"] = "Sam";
    employee["streetAddress"] = "12 Broadway";
    return employee;
}
function deleteFromEmployeeByKey(){
    const delNewEmployee = { ...employee};
    delNewEmployee.name="Sam";
    delNewEmployee.streetAddress="11 Broadway";
    delete delNewEmployee.name;
    return delNewEmployee;
}

function destructivelyDeleteFromEmployeeByKey(){
    delete employee.name;
    return employee;
}