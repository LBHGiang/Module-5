import {Component, OnInit} from '@angular/core';
import {CustomerService} from '../../service/customer.service';
import {Customer} from '../../model/customer';

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.css']
})
export class ListCustomerComponent implements OnInit {

  message: string;
  customers: Customer[];
  customerDetail: Customer | undefined;

  constructor(private customerService: CustomerService) {
  }

  ngOnInit(): void {
    this.customerService.findAll().subscribe(data => {
      this.customers = data;
      this.getMessage();
    }, error => {
      this.message = 'Đã có lỗi từ server';
    });
  }

  getMessage() {
    this.message = this.customerService.message;
  }

  sendToDetailModal(id: number) {
    this.customerService.findById(id).subscribe(data => {
      this.customerDetail = data;
    });
  }
}
