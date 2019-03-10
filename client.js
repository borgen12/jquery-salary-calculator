console.log('gret');

$(document).ready(readyNow);
let employeeList = [];
let monthSalaries = [];

function readyNow() {
    $('.submitButton').on('click', addEmployee);
}

function addEmployee () {
    let newEmployee = {
        firstName: $('#fNameInput').val(),
        lastName: $('#lNameInput').val(),
        id: $('#idInput').val(),
        title: $('#titleInput').val(),
        annualSalary: $('#salaryInput').val(),
    }
    $('#fNameInput, #lNameInput, #idInput, #titleInput, #salaryInput').val('');
    //clear input fields
    employeeList.push(newEmployee);
    let monthSalary = (newEmployee.annualSalary)/12;
    monthSalaries.push(monthSalary);
    console.log('monthSalaries', monthSalaries);
    

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
    monthLog();
}

function monthLog() {
    console.log('in monthLog');
    let clearMonth = $('emTable');
    clearMonth.empty();
    let sum = monthSalaries.reduce(function (a, b) { return a + b; }, 0);
    for( let employee of employeeList) {
        $('.emFoot').append('<h2>' + sum + '</h2>');
    }
}

function sumMonth() {
    let sum = monthSalaries.reduce(function (a, b) { return a + b; }, 0);
    return sum;

    /* let sum = 0;
    for (let i=0; i<monthSalaries.length; i++){
        console.log(monthSalaries[i]);

        return sum += monthSalaries[i]; */
console.log(sumMonth);
 
}