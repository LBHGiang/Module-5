import {Component, OnInit} from '@angular/core';
import {StudentService} from '../../service/student.service';
import {Student} from '../../model/student';
import {Class} from '../../model/class';

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.css']
})
export class ListStudentComponent implements OnInit {

  customers: Student[];
  customerDetail: Student | undefined;
  customerDelete: Student | undefined;
  customerTypes: Class[];
  p = 1;
  count = 5;
  searchName = '';
  searchEmail = '';
  searchCustomerType = '';
  searchDayOfBirth = '1940-01-01';

  constructor(private customerService: StudentService) {
  }

  ngOnInit(): void {
    this.getCustomerTypes();
    this.findNameEmailCustomerType();
  }

  // findNameEmailCustomerType() {
  //   this.p = 1;
  //   this.customerService.searchNameEmailCustomerType(this.searchName, this.searchEmail, this.searchCustomerType).subscribe(data => {
  //     this.customers = data;
  //   }, error => {
  //     this.customerService.showErrorNotification('Không thể kết nối đến Server');
  //   });
  // }

  // getAll() {
  //   this.customerService.findAll().subscribe(data => {
  //     this.customers = data;
  //   }, error => {
  //     this.customerService.showErrorNotification('Không thể kết nối đến Server');
  //   });
  // }

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

  findNameEmailCustomerType() {
    this.p = 1;
    this.customerService.searchNameEmailCustomerType(
      this.searchName, this.searchEmail, this.searchCustomerType).subscribe(
      data => {
        this.customers = data.filter(value => {
            const formatttt = new Date(value.dayOfBirth);
            const fromYear = new Date(this.searchDayOfBirth);
            if (formatttt > fromYear) {
              return data;
            }
          }
        );

      }, error => {
        this.customerService.showErrorNotification('Không thể kết nối đến Server');
      });
  }

}
