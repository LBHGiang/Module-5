import {Student} from '../app/ss5_components_interaction/practice/demo/student';

// tslint:disable-next-line:prefer-const
let student1: Student;

// @ts-ignore
const student2: Student = {name: 'Student', age: undefined};

console.log(student2);

const student3 = {name: 'Student', age: 6};
console.log(student3);
