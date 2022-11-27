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

  // tslint:disable-next-line:variable-name
  constructor(private _studentService: StudentService) {
  }

  ngOnInit(): void {
    this.students = this._studentService.students;
  }
}
