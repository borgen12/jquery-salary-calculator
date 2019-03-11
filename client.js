console.log('gret');

$(document).ready(readyNow);
//array for holding new objects (employees)
let employeeList = [];
//array for holding monthly salaries
let monthSalaries = [];

function readyNow() {
    //add input fields on click
    $('.submitButton').on('click', addEmployee);
}

function addEmployee () {
    //create object to store values from inputfields
    let newEmployee = {
        firstName: $('#fNameInput').val(),
        lastName: $('#lNameInput').val(),
        id: $('#idInput').val(),
        title: $('#titleInput').val(),
        annualSalary: $('#salaryInput').val(),
    }
    //clear input fields
    $('#fNameInput, #lNameInput, #idInput, #titleInput, #salaryInput').val('');
    //store object values in array
    employeeList.push(newEmployee);
    //create variable for calculating monthly salaries
    let monthSalary = (newEmployee.annualSalary)/12;
    //store monthly salaries in different array
    monthSalaries.push(monthSalary);
    console.log('monthSalaries', monthSalaries);
    logEmployee();
} 

function logEmployee() {
    console.log('in logEmployee');
    //empty array of last entered value
    let clear = $('.emTable');
    clear.empty();
    //loop through object array to grab values and list in table, create delete button
    for( let employee of employeeList) {
        $('.emTable').append(`<tr><td>${employee.firstName}</td><td>${employee.lastName}
        </td><td>${employee.id}</td><td>${employee.title}</td><td>${employee.annualSalary}</td>
        <td><button class="deleteButton">Delete</button></td></tr>`);
    }
    monthLog();
    deleteButton();
}

function monthLog() {
    console.log('in monthLog');
    //empty the last value entered
    $('.emFoot').empty();
    //add up all the values in array
    let sum = monthSalaries.reduce(function (a, b) { return a + b; });
    console.log(sum);
    //display array sum in DOM
    $('.emFoot').append(`<h3>$${sum}</h3>`);
    //change text to red if sum exceeds $20,000
    if ((sum) >= 20000) {
        //$('.emFoot').addClass('red');
        $('.emFoot').append('<h3 class="red"></h3>');

    }
}

function deleteButton () {
    
    $('.deleteButton').on('click', removeRow);
    console.log('click');
    
}
function removeRow() {
    $(this).parent().parent().remove();
    console.log('but');
    spliceData();
}

function spliceData() {

}
//there is a bug where after deleting an item and then adding a new item,
//the new item will then call beck the deleted item because it is still
//in the monthSalaries array
//once delete button is pressed I need it to also splice the data out of 
//the array. once I can do that, the stretch goal will also be complete