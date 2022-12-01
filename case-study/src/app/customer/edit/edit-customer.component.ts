import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CustomerType} from '../../model/customer-type';
import {CustomerService} from '../../service/customer.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Customer} from '../../model/customer';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements OnInit {

  rfCustomer: FormGroup;
  customer: Customer;
  customerTypes: CustomerType[];

  constructor(private formBuilder: FormBuilder,
              private customerService: CustomerService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
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
    const id = +this.activatedRoute.snapshot.params.id;
    this.customerService.findById(id).subscribe(data => {
      this.rfCustomer = this.formBuilder.group({
        id: [data.id],
        name: [data.name, [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(25),
          Validators.pattern('^[A-Z][a-z]*([ ][A-Z][a-z]+)*$')
        ]],
        dayOfBirth: [data.dayOfBirth, [
          Validators.required,
          Validators.pattern('^\\d{4}[-]\\d{2}[-]\\d{2}$')
        ]],
        gender: [data.gender],
        idCard: [data.idCard, [
          Validators.required,
          Validators.pattern('^\\d{3}$')
        ]],
        phone: [data.phone, [
          Validators.required,
          Validators.pattern('^\\(\\+84\\)\\-\\d{1,2}$')
        ]],
        email: [data.email, [
          Validators.required]],
        address: [data.address],
        customerType: [data.customerType, [
          Validators.pattern('^[^0]$')
        ]],
      });
    }, error => {
      this.customerService.showErrorNotification('Có lỗi từ server!');
    });
  }

  submit() {
    const customer = this.rfCustomer.value;
    this.customerService.update(customer).subscribe(
      data => {
        this.router.navigateByUrl('/customers');
        this.customerService.showSuccessNotification('Chỉnh sửa thành công!');
      }, error => {
        this.customerService.showErrorNotification('Chỉnh sửa thất bại!');
      });
  }

}
