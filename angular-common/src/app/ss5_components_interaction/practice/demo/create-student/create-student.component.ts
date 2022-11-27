import {Component, OnInit} from '@angular/core';
import {Student} from '../student';
import {StudentService} from '../service/student-service.service';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent implements OnInit {

  student: Student | undefined;

  rfStudent: FormGroup;

  constructor(private studentService: StudentService,
              private router: Router,
              private formBuilder: FormBuilder
  ) {
  }

  ngOnInit(): void {
    this.rfStudent = this.formBuilder.group({
      name: [, [
        Validators.required,
        Validators.minLength(5)
      ]],
      gender: ['1'],
      point: [, [
        Validators.required
      ]]
    })
    ;
  }

  onSubmit(): void {
    if (this.rfStudent.valid) {
      console.log(this.rfStudent.value);
      this.studentService.save(this.rfStudent.value);
      this.router.navigateByUrl('/home');
    }
  }

}
