import {Component, Input, OnInit} from '@angular/core';
import {Student} from '../student';

@Component({
  selector: 'app-detail-student',
  templateUrl: './detail-student.component.html',
  styleUrls: ['./detail-student.component.css']
})
export class DetailStudentComponent implements OnInit {

  @Input('studentKey') student: Student | undefined;

  constructor() {
  }

  ngOnInit(): void {
  }

}
