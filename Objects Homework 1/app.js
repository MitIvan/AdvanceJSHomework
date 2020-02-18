//-------Academy Constructor----------
function CreateAcademy(name, start, end) {
  this.name = name;
  this.students = [];
  this.subjects = [];
  this.start = start;
  this.end = end;
  this.numberOfClasses = function() {
    return this.subjects.length * 10;
  };

  this.printStudents = function() {
    return this.students;
  };

  this.printSubjects = function() {
    return this.subjects;
  };
}

//-----------Creating Academy---------------
let sedc = new CreateAcademy("sedc", "01-01-2019", "01-01-2020");

// ----------------- Create Subject  Constructor----------------
function CreateSubject(title, isElective) {
  this.title = title;
  this.numberOfClasses = 10;
  this.isElective = isElective;
  this.academy = null;
  this.students = [];

  this.overrideClasses = function(number) {
    if (number < 3) {
      return "the number of classes can't be smaller than 3";
    } else {
      return (this.numberOfClasses = number);
    }
  };

  this.addSubjectToAcademy = function(academyName) {
    this.academy = Object.create(academyName);
    academyName.subjects.push(`${this.title}`);
  };
}

//------- Create Subjects -------
let Ajs = new CreateSubject("Ajs", false, []);
let Bjs = new CreateSubject("Bjs", false, []);
//------ Add Subjects to Academy
Ajs.addSubjectToAcademy(sedc);
Bjs.addSubjectToAcademy(sedc);

// --------------- Create Student Constructor------------
function CreateStudent(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.completedSubjects = [];
  this.academy = null;
  this.currentSubject = null;

  this.startAcademy = function(academyName) {
    this.academy = Object.create(academyName);
    academyName.students.push(`${this.firstName} ${this.lastName}`);
  };

  this.startSubject = function(subject) {
    if (this.academy === null) {
      console.log("No Academy");
    } else if (
      !this.academy.subjects.includes(subject.title)) {
          console.log("No subject");
    } else {
      if (this.currentSubject !== null) {
        this.completedSubjects.push(this.currentSubject);
        this.currentSubject = subject.title;
      } else {
        this.currentSubject = subject.title;
      }
      subject.students.push(`${this.firstName} ${this.lastName}`);
    }
  };
}

//------ create students --------
ivan = new CreateStudent("Ivan", "Mitev", 30);
john = new CreateStudent("John", "Doe", 35);

//------- Add student to academy -----
ivan.startAcademy(sedc);
john.startAcademy(sedc);

//------ Add students to subject
ivan.startSubject(Ajs);
ivan.startSubject(Bjs);

john.startSubject(Bjs);

//---------- Console logs
console.log("Academy");
console.log(sedc);
console.log("Number of classes", sedc.numberOfClasses());
console.log("Students", sedc.printStudents());
console.log("Subjects", sedc.printSubjects());
console.log("=================================");
console.log("Subjects");
console.log(Ajs);
console.log(Bjs);
console.log("Overridden classes", Ajs.overrideClasses(5));
console.log(Ajs);
console.log("=================================");
console.log("Students");
console.log(ivan);
console.log(john);
