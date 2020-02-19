function Person(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    
    this.getFullName = function(){
        return`${this.firstName} ${this.lastName}`
    }
}


function Student( studentId, firstName, lastName, age) {
    Object.setPrototypeOf(this, new Person(firstName, lastName, age))
    this.academyName = ''
    this.studentId = studentId
    
    this.study = function() {
        return(`The student ${firstName} is studying in the ${academyName} academy`);
    }
    this.showAcademy = function(){
        return this.academyName
    }
}


function DesignStudent(studentId, firstName, lastName, age ) {
    Object.setPrototypeOf(this, new Student(studentId, firstName, lastName, age))
    this.isStudentOfTheMonth = false
    this.academyName = 'design'
   
    this.attendAdobeExam = function(){
        return `The student ${firstName} is doing an adobe exam!`
    }
}


function CodeStudent(studentId, firstName, lastName, age) {
    Object.setPrototypeOf(this, new Student(studentId, firstName, lastName, age))
    this.hasIndividualProject = false;
    this.hasGroupProject = false;
    this.academyName = 'code'
    
    this.doProject = function(type) {
        if(type.toLowerCase() === 'group'){
            this.hasGroupProject = true
            return `${this.firstName} is working on group project`
        } else if(type.toLowerCase() === 'individual'){
            this.hasIndividualProject = true
            return `${this.firstName} is working on group individual`
        }else {
            return `enter group or individual`
        }
    }
}


function NetworkStudent(academyPart, studentId, firstName, lastName, age) {
    Object.setPrototypeOf(this, new Student(studentId, firstName, lastName, age))
    this.academyPart = academyPart
    this.academyName = 'network'
    this.attendCiscoExam = function(){
        return `the student ${firstName} is doing a cisco exam!`
    }
 }




ivan = new CodeStudent(1, 'Ivan', 'Mitev', 29)
console.log(ivan);
console.log(ivan.showAcademy());
console.log('--------------------------');


john = new NetworkStudent(1, 2, 'John', 'Doe', 22)
console.log(john);
console.log(john.showAcademy());
console.log('--------------------------');

ime = new DesignStudent(3, 'ime', 'prezime', 555)

console.log(ime);
console.log(ime.showAcademy());