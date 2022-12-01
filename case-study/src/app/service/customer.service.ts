import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Customer} from '../model/customer';
import {environment} from '../../environments/environment';
import {CustomerType} from '../model/customer-type';
import {ToastrService} from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private httpClient: HttpClient,
              private toastrService: ToastrService) {
  }

  findAll(): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>(environment.api_url_customers);
  }

  searchNameEmailCustomerType(name: string, email: string, customerType: string): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>(
      `${environment.api_url_customers}?name_like=${name}&email_like=${email}&customerType_like=${customerType}`
    );
  }

  save(customer: Customer): Observable<Customer> {
    return this.httpClient.post<Customer>(environment.api_url_customers, customer);
  }

  update(customer: Customer): Observable<Customer> {
    return this.httpClient.patch<Customer>(environment.api_url_customers + '/' + customer.id, customer);
  }

  findById(id: number): Observable<Customer> {
    return this.httpClient.get<Customer>(environment.api_url_customers + '/' + id);
  }

  remove(customer: Customer): Observable<Customer> {
    return this.httpClient.delete<Customer>(environment.api_url_customers + '/' + customer.id);
  }

  findAllCustomerTypes(): Observable<CustomerType[]> {
    return this.httpClient.get<CustomerType[]>(environment.api_url_customerTypes);
  }

  showSuccessNotification(message: string) {
    this.toastrService.success(message, 'Thông Báo', {
      timeOut: 2000,
      progressBar: true,
      positionClass: 'toast-top-right',
      easing: 'ease-in'
    });
  }

  showErrorNotification(message: string) {
    this.toastrService.error(message, 'Lỗi', {
      timeOut: 2000,
      progressBar: true,
      positionClass: 'toast-top-right',
      easing: 'ease-in'
    });
  }

  showWarningNotification(message: string) {
    this.toastrService.warning(message, 'Cảnh báo', {
      timeOut: 2000,
      progressBar: true,
      positionClass: 'toast-top-right',
      easing: 'ease-in'
    });
  }
}


