// Assignment -3 (Arrays/Datatypes/Operators) 

// 1. Create two arrays to store student names ["Suresh","Mahesh","Naresh"] and 
// marks [75, 80, 82] Add 10 marks to each students using assignment operators and 
// store it into another array, after adding 10 marks identify the average marks of all 
// students 

// Expected Output: 
// Updated Marks: 
// Suresh: 85 
// Mahesh: 90 
// Naresh: 92 
// Average Marks: 89.0

// using first way
interface studentInfo {
    name: string,
    marks: number
}
let students: studentInfo[] = [
    { name: "Suresh", marks: 75 },
    { name: "Mahesh", marks: 80 },
    { name: "Naresh", marks: 82 }
]
let totalMarks: number = 0;
for (let student of students) {
    student.marks += 10; // add 10 marks to each student
    totalMarks += student.marks; // calculate the total marks after adding 10 marks
    console.log(student.name + ": " + student.marks)
}
console.log("Average Marks: " + (totalMarks / students.length))


//second way
let studentNames: string[] = ["Suresh", "Mahesh", "Naresh"]
let marks: number[] = [75, 80, 82]
let newMarks: number = 0;
let sumOfNewMarks: number = 0;
for (let i: number = 0; i < marks.length; i++) {
    newMarks = (marks[i] ?? 0) + 10;
    sumOfNewMarks += newMarks;
    console.log(studentNames[i] + ": " + newMarks)
}
console.log("Average Marks: " + (sumOfNewMarks / marks.length))
