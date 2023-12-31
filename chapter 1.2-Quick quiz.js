// simple JavaScript program that uses objects to store the name, phone number, and marks of a student:

// Define a student object
var student = {
  name: '',
  phoneNumber: '',
  marks: 0,
};

// Function to input student details
function inputStudentDetails() {
  // Get input from the user
  student.name = prompt('Enter student name:');
  student.phoneNumber = prompt('Enter phone number:');
  student.marks = parseFloat(prompt('Enter marks:'));
}

// Function to display student details
function displayStudentDetails() {
  // Display student details
  console.log('Student Details:');
  console.log('Name: ' + student.name);
  console.log('Phone Number: ' + student.phoneNumber);
  console.log('Marks: ' + student.marks);
}

// Input student details
inputStudentDetails();

// Display student details
displayStudentDetails();