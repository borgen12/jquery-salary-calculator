console.log('gret');

$(document).ready(readyNow);
let employeeList = [];

function readyNow() {
    $('.submitButton').on('click', addEmployee);
}

function addEmployee () {
    let newEmployee = {
        firstName: $('#fNameInput').val(),
        lastName: $('#lNameInput').val(),
        id: $('#idInput').val(),
        title: $('#titleInput').val(),
        annualSalary: $('#salaryInput').val()
    }
    employeeList.push(newEmployee);
    console.log('newEmployee:', employeeList);
    logEmployee();
} 

function logEmployee() {
    console.log('in logEmployee');
    let clear = $('.emTable');
    clear.empty();
    //empty array of last entered value
    for( let employee of employeeList) {
        $('.emTable').append(`<tr><td>${employee.firstName}</td><td>${employee.lastName}
        </td><td>${employee.id}</td><td>${employee.title}</td><td>${employee.annualSalary}</td></tr>`);
    }

}