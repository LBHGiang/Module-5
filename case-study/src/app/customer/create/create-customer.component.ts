import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
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
    this.getCustomerTypes();
    this.getAll();
  }

  getAll(): void {
    this.customerService.findAll().subscribe(data => {
      console.log(data);
      this.customerList = data;
      this.createForm();
    });
  }

  getCustomerTypes() {
    this.customerService.findAllCustomerTypes().subscribe(
      data => {
        console.log('lay Type');
        this.customerTypes = data;
      }, error => {
        this.customerService.showErrorNotification('Có lỗi khi tải Loại khách hàng!');
      }
    );
  }

  createForm() {
    console.log('tao form');
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

  helloWorld(abstractControl: AbstractControl): any {
    const check = false;
    console.log(this.customerList);
    return check ? null : {invalidEmail: true};
  }
}



