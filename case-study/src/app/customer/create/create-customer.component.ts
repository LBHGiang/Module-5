import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators} from '@angular/forms';
import {CustomerService} from '../../service/customer.service';
import {CustomerType} from '../../model/customer-type';
import {Customer} from '../../model/customer';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {

  rfCustomer: FormGroup;

  customerTypes: CustomerType[];

  customerList: Customer[];

  constructor(private formBuilder: FormBuilder,
              private customerService: CustomerService) {
  }

  ngOnInit(): void {
    this.getAll();
    this.getCustomerTypes();
  }

  getAll(): void {
    this.customerService.findAll().subscribe(data => {
      this.customerList = data;
      this.createForm();
    });
  }

  getCustomerTypes() {
    this.customerService.findAllCustomerTypes().subscribe(
      data => {
        this.customerTypes = data;
      }, error => {
        this.customerService.showErrorNotification('Có lỗi khi tải Loại khách hàng!');
      }
    );
  }

  createForm() {
    this.rfCustomer = this.formBuilder.group({
      name: ['', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(25),
        Validators.pattern('^[A-Z][a-z]*([ ][A-Z][a-z]+)*$')
      ]],
      dayOfBirth: ['', [
        Validators.required,
        Validators.pattern('^\\d{4}[-]\\d{2}[-]\\d{2}$')
      ]],
      gender: ['0', [
        Validators.required]],
      idCard: ['', [
        Validators.required,
        Validators.pattern('^\\d{3}$')
      ]],
      phone: ['(+84)-', [
        Validators.required,
        Validators.pattern('^\\(\\+84\\)\\-\\d{1,2}$')
      ]],
      email: ['', [
        Validators.required,
      ]],
      address: [''],
      customerType: [0, [
        Validators.pattern('^[^0]$')
      ]],
    }, {validators: this.checkMail});
  }

  submit() {
    const customer = this.rfCustomer.value;
    this.customerService.save(customer).subscribe(
      data => {
        this.customerService.showSuccessNotification('Thêm mới thành công!');
        this.createForm();
      }, error => {
        this.customerService.showErrorNotification('Thêm mới thất bại!');
      });
  }

  checkMail: ValidatorFn = (abstractControl: AbstractControl): ValidationErrors | null => {
    const email = abstractControl.get('email').value;
    let result = null;
    this.customerList.forEach(item => {
      if (email === item.email) {
        result = {inValidEmail: true};
      }
    });
    return result;
  };
}
