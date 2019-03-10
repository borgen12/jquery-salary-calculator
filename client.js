console.log('gret');

$(document).ready(readyNow);
let employee = [];

function readyNow() {
    $('#submitButton').on('click', addEmployee)
}

function addEmployee () {
    let newEmployee = {
        firstName: $('.firstNameInput').val(),
        lastName: $('.lastNameInput').val(),
        id: $('.idInput').val(),
        title: $('.titleInput').val(),
        annualSalary: $('.salaryInput').val()
    }
    employee.push(newEmployee);
    console.log('newEmployee:', newEmployee);
    logEmployee();
} 

function logEmployee() {

}