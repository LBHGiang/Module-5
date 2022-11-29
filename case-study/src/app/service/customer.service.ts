import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Customer} from '../model/customer';
import {environment} from '../../environments/environment';
import {CustomerType} from '../model/customer-type';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  message: string;

  constructor(private httpClient: HttpClient) {
  }

  findAll(): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>(environment.api_url_customers);
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
}


