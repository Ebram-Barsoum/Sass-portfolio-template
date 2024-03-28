$('.menu_burger').click(() => {
    $('.menu_burger').toggleClass('open');
    $('.nav_bar').toggleClass('open');
    $('.nav_link').toggleClas('open');
});

function counter() {
    let count = 20;
    let name = 'K-lala';
    return {
        getValue: () => {
            return count;
        },

        increase: () => {
            count++;
        }
    }
}
const count = counter();
console.log(count);

function Employee_(id, name) {
    this.id = id;
    this.name = name;
}

Employee_.prototype.setSalary = function (salary) {
    this.salary = salary;
}
Employee_.prototype.getSalary = function () {
    return this.salary;
}

const emp = new Employee_('001', 'abram');
console.log(emp);
console.log(emp.setSalary(16000));
console.log(emp.getSalary(16000));

function Manager_() {
    Employee_.apply(this, arguments);
}

Manager_.prototype = Object.create(Employee_.prototype);

Manager_.prototype.setDepartment = function (department) {
    this.department = department;
}
Manager_.prototype.getDepartment = function () {
    return this.department;
}

const manager = new Manager_('002', 'Rere');
manager.setDepartment('Web Engineering');
console.log(manager);
manager.setSalary(45000);
console.log(manager.getSalary())
