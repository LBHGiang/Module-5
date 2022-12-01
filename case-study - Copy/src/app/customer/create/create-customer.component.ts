import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CustomerService} from '../../service/customer.service';
import {CustomerType} from '../../model/customer-type';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {

  rfCustomer: FormGroup;

  customerTypes: CustomerType[];

  constructor(private formBuilder: FormBuilder,
              private customerService: CustomerService) {
  }

  ngOnInit(): void {
    this.getCustomerTypes();
    this.createForm();
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
        Validators.pattern('^[A-Z][a-z]*([ ][A-Z][a-z]*)*$')
      ]],
      dayOfBirth: ['', [
        Validators.required,
        Validators.pattern('^\\d{4}[-]\\d{2}[-]\\d{2}$'),
        this.validateAgeFrom18
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
        Validators.required]],
      address: [''],
      customerType: ['', [
        Validators.required
      ]],
    });
  }

  submit() {
    const customer = this.rfCustomer.value;
    this.customerService.save(customer).subscribe(
      data => {
        this.customerService.showSuccessNotification('Thêm mới thành công!');
        this.rfCustomer.reset();
      }, error => {
        this.customerService.showErrorNotification('Thêm mới thất bại!');
      });
  }

  validateAgeFrom18(abstractControl: AbstractControl): any {
    const formatttt = new Date(abstractControl.value);
    const fromYear = new Date(abstractControl.value).getFullYear();
    const curYear = new Date().getFullYear();
    return (curYear - fromYear >= 1) ? null : {invalidAge: true};
  }
}
