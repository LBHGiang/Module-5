import {Component, OnInit} from '@angular/core';
import {Student} from '../student';
import {StudentService} from '../service/student-service.service';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-detail-student',
  templateUrl: './detail-student.component.html',
  styleUrls: ['./detail-student.component.css']
})
export class DetailStudentComponent implements OnInit {

  student: Student | undefined;

  index: number;

  constructor(private studentService: StudentService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      (params: Params) => {
        this.index = params.index;
      }
    );
  }

}
