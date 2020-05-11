const { prompt } = require("inquirer");
const logo = require("asciiart-logo");
const db = require("./db");
require("console.table");

init();

// Display logo text, load main prompts
function init() {
  const logoText = logo({ name: "Employee Manager" }).render();

  console.log(logoText);

  loadMainPrompts();
}

async function loadMainPrompts() {
  const { choice } = await prompt([
    {
      type: "list",
      name: "choice",
      message: "What would you like to do?",
      choices: [
        {
          name: "View All Employees",
          value: "VIEW_EMPLOYEES"
        },
        {
          name: "Add Employee",
          value: "ADD_EMPLOYEE"
        },
        {
          name: "Remove Employee",
          value: "REMOVE_EMPLOYEE"
        },
        {
          name: "Update Employee Role",
          value: "UPDATE_EMPLOYEE_ROLE"
        },
        {
          name: "View Employees by Department",
          value: "VIEW_EMPLOYEES_BY_DEPARTMENT"
        },
        {
          name: "View Employees by Manager",
          value: "VIEW_EMPLOYEES_BY_MANAGER"
        },
        {
          name: "Update Employee Manager",
          value: "UPDATE_EMPLOYEE_MANAGER"
        },
        {
          name: "View Roles",
          value: "VIEW_ROLES"
        },
        {
          name: "Add a Role",
          value: "ADD_ROLE"
        },
        {
          name: "Remove a Role",
          value: "REMOVE_ROLE"
        },
        {
          name: "View All Departments",
          value: "VIEW_DEPARTMENTS"
        },
        {
          name: "Add a Department",
          value: "ADD_DEPARTMENT"
        },
        {
          name: "Remove a Department",
          value: "REMOVE_DEPAERMENT"
        },
        {
          name: "View the Budget",
          value: "VIEW_BUDGET"
        },
        {
          name: "Quit",
          value: "QUIT"
        }
      ]
    }
  ]);

  // Call the appropriate function depending on what the user chose
  switch (choice) {
    case "VIEW_EMPLOYEES":
      return viewEmployees();
    case "ADD_EMPLOYEE":
      return addEmployee();
    case "REMOVE_EMPLOYEE":
      return removeEmployee();
    case "UPDATE_EMPLOYEE_ROLE":
      return updateEmployeeRole();
    case "VIEW_EMPLOYEES_BY_DEPARTMENT":
      return viewEmployeesByDepartment();
    case "VIEW_EMPLOYEES_BY_MANAGER":
      return viewEmployeesByManager();
    case "UPDATE_EMPLOYEE_MANAGER":
      return updateEmployeeManager();
    case "VIEW_ROLES":
      return viewRoles();
    case "ADD_ROLE":
      return addRole();
    case "REMOVE_ROLE":
      return removeRole();
    case "VIEW_DEPARTMENTS":
      return viewDepartments();
    case "ADD_DEPARTMENT":
      return addDepartment();
    case "REMOVE_DEPAERMENT":
      return removeDepartment();
    case "VIEW_BUDGET":
      return viewBudget();
    default:
      return quit();
  }
}
//save
async function viewEmployees() {
  const employees = await db.findAllEmployees();

  console.log("\n");
  console.table(employees);

  loadMainPrompts();
}

//Create viewEmployeesByDepartment function
async function viewEmployeesByDepartment() {
  const departmentEmp = await db.findAllDepartments();

  const departmentChoices = departmentEmp.map(({ id, name }) => ({
    name: name,
    value: id
  }));

  const { departmentId } = await prompt([
    {
      type: "list",
      name: "departmentId",
      message: "Select a department to see employees from.",
      choices: departmentChoices
    }
  ]);

  const employees = await db.findDeptEmployeesByRole(departmentId);

  console.log("\n");
  console.table(employees);

  loadMainPrompts();
}

//Create viewEmployeesByManager function
async function viewEmployeesByManager() {
  const managers = await db.findAllManagers();

  const managerChoices = managers.map(({ manager, manager_id }) => ({
    name: manager,
    value: manager_id
  }));

  for (i = 0; i < managerChoices.length; i++) {
    if (managerChoices[i].name == null) {
      managerChoices.splice(i,1);
    }
  }

  const {managerId} = await prompt([
    {
      type: "list",
      name: "managerId",
      message: "Select a manager to see their workers.",
      choices: managerChoices
    }
  ]);

  var result = await db.findDirectReports(managerId);

  console.log("\n");
  console.table(result);

  loadMainPrompts(); 
}

//save
async function removeEmployee() {
  const employees = await db.findAllEmployees();

  const employeeChoices = employees.map(({ id, first_name, last_name }) => ({
    name: `${first_name} ${last_name}`,
    value: id
  }));

  const { employeeId } = await prompt([
    {
      type: "list",
      name: "employeeId",
      message: "Which employee do you want to remove?",
      choices: employeeChoices
    }
  ]);

  await db.removeEmployee(employeeId);

  console.log("Removed employee from the database");

  loadMainPrompts();
}

//save
async function updateEmployeeRole() {
  const employees = await db.findAllEmployees();

  const employeeChoices = employees.map(({ id, first_name, last_name }) => ({
    name: `${first_name} ${last_name}`,
    value: id
  }));

  const { employeeId } = await prompt([
    {
      type: "list",
      name: "employeeId",
      message: "Which employee's role do you want to update?",
      choices: employeeChoices
    }
  ]);

  const roles = await db.findAllRoles();

  const roleChoices = roles.map(({ id, title }) => ({
    name: title,
    value: id
  }));

  const { roleId } = await prompt([
    {
      type: "list",
      name: "roleId",
      message: "Which role do you want to assign the selected employee?",
      choices: roleChoices
    }
  ]);

  await db.updateEmployeeRole(employeeId, roleId);

  console.log("Updated employee's role");

  loadMainPrompts();
}

//Create updateEmployeeManager function
async function updateEmployeeManager() {
 const employees = await db.findAllEmployees();
 const managers =  await db.findAllManagers();

 const employeeChoices = employees.map(({ id, first_name, last_name }) => ({
   name: `${first_name} ${last_name}`,
   value: id
 }));

const { employeeId } = await prompt([{
  type: "list", 
  name: "employeeId", 
  message: "Which employee do you want to change the manager of?", 
  choices: employeeChoices
  }
]);

const managerChoices = managers.map(({ manager, manager_id }) => ({
    name: manager,
    value: manager_id
}));

const {managerId} = await prompt([
  {
    type: "list",
    name: "managerId",
    message: "Pick a manager.",
    choices: managerChoices
  }
]);

await db.updateEmployeeManager(employeeId, managerId);

console.log("\n");
console.log("Updated Manager");

loadMainPrompts();

}

//Create viewRoles function
async function viewRoles() {
  const result = await db.findAllRoles();

  console.log("\n");
  console.table(result);

  loadMainPrompts();
}

//Create addRole function
async function addRole() {
  const role = await prompt([
    {
      type: "input",
      name: "title",
      message: "What role would you like to create?"
    }
  ])

  const {salary} = await prompt([
    {
      type: "input",
      name: "salary",
      message: "What is this salary for this role?",
      validate: function validateId(salary) {
        var isValid = !Number.isNaN(parseInt(salary));
        return isValid || "Salary must be a number."
      }
    }
  ])

  role.salary = parseInt(salary);
  const departments = await db.findAllDepartments();
  const departmentChoices = departments.map(({id, name}) => ({
    name: name,
    value: id
  }));

  const {departmentId} = await prompt([
    {
      type: "list",
      name: "departmentId",
      message: "What department are you adding this role to?",
      choices: departmentChoices
    }
  ]);

  role.department_id = departmentId;
  await db.createRole(role);

  console.log("\n");
  console.log("The new role has been added.");

  loadMainPrompts();
}

//Create removeRole function
async function removeRole() {
  const roleList = await db.findAllRoles();

  const roleChoices = roleList.map(({ id, title }) =>  ({
    name: title,
    value: id
  }));

  const {roleId} = await prompt([
    {
      type: "list",
      name: "roleId",
      message: "What role do you want to delete?",
      choices: roleChoices
    }
  ]);

  await db.removeRole(roleId);

  console.log("\n");
  console.log("That role has been removed.");

  loadMainPrompts();
}

//Create viewDepartments function - Added to show departments. Didn't make sense to add or remove a department without seeing what ones there were.
async function viewDepartments() {
  const departments = await db.findAllDepartments();

  console.log("\n");
  console.table(departments);

  loadMainPrompts();
}

//Create addDepartment function
async function addDepartment() {
  const department = await prompt([
    {
      name: "name",
      message: "What are you calling this department?"
  }
]);

await db.createDepartment(department);

console.log(`Added ${department.name} to Departments.`);

loadMainPrompts();

}

//Create removeDepartment function
async function removeDepartment() {
  const departments = await db.findAllDepartments();

  const departmentChoices = departments.map(({ id, name }) => ({
    name: name,
    value: id
  }));

const { departmentId } = await prompt({
  type: "list",
  name: "departmentId",
  message: "What department do you want removed?",
  choices: departmentChoices
});

await db.removeDepartment(departmentId);

console.log("That department no longer exists");

loadMainPrompts();
}

//save
async function addEmployee() {
  const roles = await db.findAllRoles();
  const employees = await db.findAllEmployees();

  const employee = await prompt([
    {
      name: "first_name",
      message: "What is the employee's first name?"
    },
    {
      name: "last_name",
      message: "What is the employee's last name?"
    }
  ]);

  const roleChoices = roles.map(({ id, title }) => ({
    name: title,
    value: id
  }));

  const { roleId } = await prompt({
    type: "list",
    name: "roleId",
    message: "What is the employee's role?",
    choices: roleChoices
  });

  employee.role_id = roleId;

  const managerChoices = employees.map(({ id, first_name, last_name }) => ({
    name: `${first_name} ${last_name}`,
    value: id
  }));
  managerChoices.unshift({ name: "None", value: null });

  const { managerId } = await prompt({
    type: "list",
    name: "managerId",
    message: "Who is the employee's manager?",
    choices: managerChoices
  });

  employee.manager_id = managerId;

  await db.createEmployee(employee);

  console.log(
    `Added ${employee.first_name} ${employee.last_name} to the database`
  );

  loadMainPrompts();
}

// View Budget
async function viewBudget() {
  const result = await db.departmentBudget();

  console.log("\n");
  console.table(result);

  loadMainPrompts();
}

function quit() {
  console.log("Goodbye!");
  process.exit();
}
