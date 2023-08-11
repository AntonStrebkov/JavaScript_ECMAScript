/* Задание 1: ""Управление персоналом компании""

Реализуйте класс Employee (сотрудник), который имеет следующие свойства и методы:

Свойство name (имя) - строка, имя сотрудника.
Метод displayInfo() - выводит информацию о сотруднике (имя).
Реализуйте класс Manager (менеджер), который наследует класс Employee и имеет дополнительное свойство и метод:

Свойство department (отдел) - строка, отдел, в котором работает менеджер.
Метод displayInfo() - переопределяет метод displayInfo() родительского класса и выводит информацию о менеджере (имя и отдел).
// Пример использования классов
const employee = new Employee(""John Smith"");
employee.displayInfo();
// Вывод:
// Name: John Smith

const manager = new Manager(""Jane Doe"", ""Sales"");
manager.displayInfo();
// Вывод:
// Name: Jane Doe
// Department: Sales */

class Employee {
  constructor(name) {
    this.name = name;
  }
  displayInfo() {
    console.log(`Name: ${this.name}`);
  }
}

class Manager extends Employee {
  constructor(name, department) {
    super(name);
    this.department = department;
  }
  displayInfo() {
    console.log(`Name: ${this.name}
Department: ${this.department}`);
  }
}

const employee = new Employee("John Smith");
employee.displayInfo();
const manager = new Manager("Jane Doe", "Sales");
manager.displayInfo();

/* ""Управление списком заказов""

Реализуйте класс Order (заказ), который имеет следующие свойства и методы:

Свойство orderNumber (номер заказа) - число, уникальный номер заказа.
Свойство products (продукты) - массив, содержащий список продуктов в заказе.
Метод addProduct(product) - принимает объект product и добавляет его в список продуктов заказа.
Метод getTotalPrice() - возвращает общую стоимость заказа, основанную на ценах продуктов.

// Пример использования класса
class Product {
constructor(name, price) {
this.name = name;
this.price = price;
}
}

const order = new Order(12345);

const product1 = new Product(""Phone"", 500);
order.addProduct(product1);

const product2 = new Product(""Headphones"", 100);
order.addProduct(product2);

console.log(order.getTotalPrice()); // Вывод: 600 */

class Order {
  constructor(orderNumber) {
    this.orderNumber = orderNumber;
    this.products = [];
  }
  addProduct(product) {
    this.products.push(product);
  }
  getTotalPrice() {
    if (this.products === undefined) {
      return 0;
    } else {
      return this.products.reduce((acc, curr) => acc + curr.price, 0);
    }
  }
}

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

const order = new Order(12345);

const product1 = new Product("Phone", 500);
order.addProduct(product1);

const product2 = new Product("Headphones", 100);
order.addProduct(product2);

console.log(order.getTotalPrice());

/* Задача: Создать класс "Студент", который имеет приватные свойства "имя", "возраст" и "средний балл". Класс должен иметь методы для установки и получения значений свойств, а также метод для вывода информации о студенте.

const student = new Student();
student.setName('Питер Паркер);
student.setAge(20);
student.setAverageGrade(85);
student.displayInfo(); */

class Student {
  _name;
  _age;
  _averageGrade;

  setName(name) {
    this._name = name;
  }
  getName() {
    return this._name;
  }
  setAge(age) {
    this._age = age;
  }
  getAge() {
    return this._age;
  }
  setAverageGrade(averageGrade) {
    this._averageGrade = averageGrade;
  }
  getAverageGrade() {
    return this._averageGrade;
  }
  displayInfo() {
    console.log(this.getName(), this.getAge(), this.getAverageGrade());
  }
}

const student = new Student();
student.setName("Питер Паркер");
student.setAge(20);
student.setAverageGrade(85);
student.displayInfo();
