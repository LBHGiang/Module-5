import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Student} from '../model/student';
import {environment} from '../../environments/environment';
import {Class} from '../model/class';
import {ToastrService} from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private httpClient: HttpClient,
              private toastrService: ToastrService) {
  }

  findAll(): Observable<Student[]> {
    return this.httpClient.get<Student[]>(environment.api_url_customers);
  }

  searchNameEmailCustomerType(name: string, email: string, customerType: string): Observable<Student[]> {
    return this.httpClient.get<Student[]>(
      `${environment.api_url_customers}?name_like=${name}&email_like=${email}&customerType.id_like=${customerType}&_sort=id&_order=desc`
    );
  }

  save(customer: Student): Observable<Student> {
    return this.httpClient.post<Student>(environment.api_url_customers, customer);
  }

  update(customer: Student): Observable<Student> {
    return this.httpClient.patch<Student>(environment.api_url_customers + '/' + customer.id, customer);
  }

  findById(id: number): Observable<Student> {
    return this.httpClient.get<Student>(environment.api_url_customers + '/' + id);
  }

  remove(customer: Student): Observable<Student> {
    return this.httpClient.delete<Student>(environment.api_url_customers + '/' + customer.id);
  }

  findAllCustomerTypes(): Observable<Class[]> {
    return this.httpClient.get<Class[]>(environment.api_url_customerTypes);
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


