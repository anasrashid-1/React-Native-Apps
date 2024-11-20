// const student = {
//     name: 'John Doe',
//     age: 20,
//     grade: '12th',
//     marks: 94,
//     subjects: ['Math', 'Science', 'English'],
//     printMarks : function(){
//         console.log(this.marks)
//     }
   
// }

// console.log(student.name)
// student.printMarks();


// const Anas = {
//     fullName :"Anas Rashid",
//     age : 24,
//     address : "Srinagar"
// }

// const employee = {
//     getTaxRate(){
//         return "tax rate is 10%";

//     }
// }


// Anas.__proto__ = employee;
// console.log(Anas)
// console.log(Anas.getTaxRate())


// Object.setPrototypeOf(Anas, employee);
// console.log(Anas)
// console.log(Anas.getTaxRate())
// console.log(Anas.__proto__.__proto__)
// console.log(Object.getPrototypeOf(Anas))



// class ToyotaCar {

//     constructor(brand){
//         this.brandName = brand;
//     }

//     start(){
//         console.log('start');
//     }


//     stop(){
//         console.log('stop');
//     }

//     setBrand(brand){
//         this.brandName = brand;
//     }
// }

// let fortuner = new ToyotaCar();
// let nexon = new ToyotaCar("Toyota")
// console.log(fortuner);
// console.log(nexon);


// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     greet() {
//         console.log(`Hello, my name is ${this.name}`);
//     }
// }

// const john = new Person('John', 30);
// john.greet(); // Output: Hello, my name is John


// class Employee extends Person {
//     constructor(name, age, jobTitle) {
//         super(name, age); // Call the constructor of the parent class
//         this.jobTitle = jobTitle;
//     }

//     work() {
//         console.log(`${this.name} is working as a ${this.jobTitle}`);
//     }
// }

// const jane = new Employee('Jane', 28, 'Developer');
// jane.greet(); // Output: Hello, my name is Jane
// jane.work();  // Output: Jane is working as a Developer


// console.log(jane)





class user {
    constructor(name, email){
        this.name = name;
        this.email = email;
    }

    viewData(){
        console.log(`Name: ${this.name}, Email: ${this.email}`);
    }
}


class admin extends user {
    constructor(name, email){
        super(name, email);
    }

    editData(name, email){
        this.name = name;
        this.email = email;
        console.log(`Name updated to ${this.name}, Email updated to ${this.email}`);
    }
}



let Anas = new admin("Anas Rashid", "anas@gmail.com");
Anas.viewData();




















