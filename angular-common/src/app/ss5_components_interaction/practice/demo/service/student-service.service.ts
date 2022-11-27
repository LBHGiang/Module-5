import {Injectable} from '@angular/core';
import {Student} from '../student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  // tslint:disable-next-line:variable-name
  private _students: Student[] = [
    {name: 'LBH Giang', gender: 1, point: 100},
    {name: 'NV Huy', gender: 1, point: 67},
    {name: 'Chou', gender: 0, point: 86},
    {name: 'LH Trường', gender: 1, point: 65},
    {name: 'NT Hải', gender: 1, point: 90}
  ];

  constructor() {
  }

  get students(): Student[] {
    return this._students;
  }

  set students(value: Student[]) {
    this._students = value;
  }

  save(student: Student): void {
    this._students.unshift(student);
  }


  findStudentByIndex(index: number): Student {
    return this._students[index];
  }


}
