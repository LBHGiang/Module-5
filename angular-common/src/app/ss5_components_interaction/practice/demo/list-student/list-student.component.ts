import {Component, OnInit} from '@angular/core';
import {Student} from '../student';
import {StudentService} from '../service/student-service.service';

@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.css']
})
export class ListStudentComponent implements OnInit {

  students: Student[] | undefined;

  // students: Student[] = [
  //   {name: 'LBH Giang', gender: 1, point: 100},
  //   {name: 'NV Huy', gender: 1, point: 67},
  //   {name: 'Chou', gender: 0, point: 86},
  //   {name: 'LH Trường', gender: 1, point: 65},
  //   {name: 'NT Hải', gender: 1, point: 90}
  // ];

  student: Student | undefined;

  sendStudent(item: Student) {
    this.student = item;
  }

  // tslint:disable-next-line:variable-name x
  constructor(private _studentService: StudentService) {
  }

  ngOnInit(): void {
    this.students = this._studentService.students;
  }


  getNewStudent(value: Student) {
    this.students.unshift(value);
  }
}
