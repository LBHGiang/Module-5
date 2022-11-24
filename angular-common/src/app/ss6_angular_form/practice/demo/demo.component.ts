import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  rfStudent: FormGroup;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.rfStudent = this.formBuilder.group({
      name: ['', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(25)
      ]],
      gender: [, [
        Validators.required,
      ]],
      point: [, [
        Validators.required,
        Validators.min(0),
        Validators.max(100),
        Validators.pattern('\\d*')
      ]],
      password: [],
      confirmPassword: []
    });
  }

  onSubmit() {
    if (this.rfStudent.valid) {
      console.log(this.rfStudent.value);
    }
  }
}
