const employees= [
    {id: 1, name: 'John Doe', age: 30, department: 'IT', salary: 50000, specialization: 'javascript'},
    {id: 2, name: 'Alice Smith', age: 28, department: 'HR', salary: 45000, specialization: 'python'},
    {id: 3, name: 'Bob Johnson', age: 35, department: 'Finance', salary: 60000, specialization: 'java'},
    //... More employee records can be added here
];
// Function to display all employees
function displayEmployees() {
const totalEmployees = employees.map((employee, index) => `<p> ${employee.id}: ${employee.name}: ${employee.age} - ${employee.department} - $${employee.salary} </p>`).join('')
document.getElementById('employeesDetails').innerHTML = totalEmployees;
}

function calculateTotalSalaries() {
    const totalSalaries = employees.reduce((acc, employee) => acc + employee.salary,0 );
    alert(`total salaries: $${totalSalaries}`)
    //alert("the total salaries is $" +totalSalaries); more global versiosn
}
function displayHREmployees(){
    const hrEmployees = employees.filter(employee => employee.department === "HR");
    const hrEmployeesDisplay = hrEmployees.map((employee, index) => `<p>${employee.id}: ${employee.name}: ${employee.age} - ${employee.department} - $${employee.salary} </p>`).join("");
    document.getElementById('employeesDetails').innerHTML= hrEmployeesDisplay;
}
function findEmployeeById(employeeId) {
    const foundEmployee = employees.find(employee => employee.id === employeeId);
    if (foundEmployee) {
        document.getElementById('employeesDetails').innerHTML = `<p>${foundEmployee.id} - ${foundEmployee.name} - ${foundEmployee.age} - ${foundEmployee.department} -$${foundEmployee.salary} </p>`;
    }
    else {
        document.getElementById('employeesDetails').innerHTML= 'no employee has been found with this ID';
    }
}

function findEmployeeBySpec(spec){
    const foundspec = employees.find(item => item.specialization === spec);
    if (foundspec) {
        document.getElementById('employeesDetails').innerHTML=`<p> ${foundspec.id} - ${foundspec.name} - ${foundspec.age} - ${foundspec.department} -$${foundspec.salary} - ${foundspec.specialization}</p>`;
    }
    else {
        document.getElementById('employeesDetails').innerHTML='no employee has been found with this specialization';
    }
}
