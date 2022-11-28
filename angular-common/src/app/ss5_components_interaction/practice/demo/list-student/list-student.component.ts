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

  constructor(private studentService: StudentService) {
  }

  ngOnInit(): void {
    this.studentService.findAll().subscribe(
      next => {
        this.students = next;
      }
    );
  }
}
