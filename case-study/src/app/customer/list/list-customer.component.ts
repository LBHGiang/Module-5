import {Component, OnInit} from '@angular/core';
import {CustomerService} from '../../service/customer.service';
import {Customer} from '../../model/customer';
import {CustomerType} from '../../model/customer-type';

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.css']
})
export class ListCustomerComponent implements OnInit {

  customers: Customer[];
  customerDetail: Customer | undefined;
  customerDelete: Customer | undefined;
  customerTypes: CustomerType[];
  p = 1;
  count = 5;
  searchName = '';
  searchEmail = '';
  searchCustomerType = '';
  searchDayOfBirth = '';
  searchDayOfBirth2 = '';

  constructor(private customerService: CustomerService) {
  }

  ngOnInit(): void {
    this.getCustomerTypes();
    // this.findNameEmailCustomerType();
    this.getAll();
  }

  findNameEmailCustomerType() {
    this.p = 1;
    this.customerService.searchNameEmailCustomerType(this.searchName, this.searchEmail, this.searchCustomerType).subscribe(data => {
      this.customers = data;
    }, error => {
      this.customerService.showErrorNotification('Không thể kết nối đến Server');
    });
  }

  getAll() {
    this.customerService.findAll().subscribe(data => {
      console.log(data);
      this.customers = data;
    }, error => {
      this.customerService.showErrorNotification('Không thể kết nối đến Server');
    });
  }

  sendToDetailModal(id: number) {
    this.customerService.findById(id).subscribe(data => {
      this.customerDetail = data;
    });
  }

  sendToDeleteModal(id: number) {
    this.customerService.findById(id).subscribe(data => {
      this.customerDelete = data;
    });
  }

  deleteCustomer() {
    this.customerService.remove(this.customerDelete).subscribe(data => {
      this.customerService.showSuccessNotification('Xoá thành công!');
    }, err => {
      this.customerService.showErrorNotification('Xoá thất bại!');
    }, () => {
      this.ngOnInit();
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

  resetSearch() {
    this.searchName = '';
    this.searchEmail = '';
    this.searchCustomerType = '';
    this.ngOnInit();
  }

  findNameEmailCustomerTypeDayOfBirth() {
    this.p = 1;
    this.customerService.searchNameEmailCustomerType(
      this.searchName, this.searchEmail, this.searchCustomerType).subscribe(
      data => {
        // tslint:disable-next-line:triple-equals
        if (this.searchDayOfBirth == '' && this.searchDayOfBirth2 == '') {
          this.customerService.showWarningNotification('Không search theo DayOfBirth');
          return data;
        }
        // tslint:disable-next-line:triple-equals
        if (this.searchDayOfBirth == '' || this.searchDayOfBirth2 == '') {
          this.customerService.showErrorNotification('Không search theo DayOfBirth');
          return data;
        }
        this.customers = data.filter(value => {
            const formatttt = new Date(value.dayOfBirth);
            const startDate = new Date(this.searchDayOfBirth);
            const endDate = new Date(this.searchDayOfBirth2);
            if (formatttt > startDate && formatttt < endDate) {
              // Ngày lớn hơn ngày bắt đầu - startDate
              return data;
            }
          }
        );

      }, error => {
        this.customerService.showErrorNotification('Không thể kết nối đến Server');
      });
  }
}
