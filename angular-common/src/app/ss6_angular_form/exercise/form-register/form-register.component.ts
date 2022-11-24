import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators} from '@angular/forms';

// @ts-ignore
export const reConfirmPass: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const password = control.get('password');
  const confirmPassword = control.get('confirmPassword');

  if (password && confirmPassword && password.value !== confirmPassword.value) {
    return {reConfirmPass: true};
  } else {
    return null;
  }
};

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.css']
})
export class FormRegisterComponent implements OnInit {

  rfUser: FormGroup;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.rfUser = this.formBuilder.group({
      name: ['', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(25)
      ]],
      gender: ['1'],
      age: [, [
        Validators.required,
        Validators.min(18),
        Validators.max(100),
        Validators.pattern('^\\d*$')
      ]],
      phone: ['+84', [
        Validators.required,
        Validators.pattern('^\\+84\\d{1,2}$')
      ]],
      country: ['0', [
        Validators.pattern('^[^0]$')
      ]],
      password: ['', [
        Validators.required,
      ]],
      confirmPassword: ['', [
        Validators.required,
      ]]
    });
  }

  onSubmit() {
    if (this.rfUser.valid) {
      console.log(this.rfUser.value);
    }
  }
}

