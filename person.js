class Person {
    constructor(firstName, lastName, age, department, email, mobile, city){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.department=department;
        this.email=email;
        this.mobile=mobile;
        this.city = city;
    }
    getPersonDetails(){
        return `Name: ${this.firstName} ${this.lastName}
        age: ${this.age}
        department: ${this.department}
        email: ${this.email}
        mobile: ${this.mobile}
        city: ${this.city}`;
    }
}
let person1 = new Person("ajit", "patil",24, "mechanical", "ajitpatil@gmail.com", 9876543210, "sangli");
let person2 = new Person("rahul", "patil",26, "electrical", "rahulpatil@gmail.com", 1234567890, "sangli");

console.log(person1.getPersonDetails());
console.log(person2.getPersonDetails());