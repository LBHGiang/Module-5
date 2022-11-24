import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Student} from '../student';
import {StudentService} from '../service/student-service.service';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent implements OnInit {

  @Output('newStudent') onCreate = new EventEmitter<Student>();

  student: Student | undefined;

  constructor(private studentService: StudentService) {
  }

  ngOnInit(): void {
  }

  createStudent(name: string, gender1: string, point1: string) {
    // tslint:disable-next-line:radix
    this.student = {name, gender: parseInt(gender1), point: parseInt(point1)};
    // this.onCreate.emit(this.student);
    this.studentService.save(this.student);
    console.log(this.student);
  }
}
