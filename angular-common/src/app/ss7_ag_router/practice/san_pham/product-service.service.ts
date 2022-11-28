import {Injectable} from '@angular/core';
import {Product} from './product';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) {
  }

  findAll(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(environment.api_url_products);
  }

  save(product: Product): Observable<Product> {
    return this.httpClient.post<Product>(environment.api_url_products, product);
  }

  update(product: Product): Observable<Product> {
    return this.httpClient.patch<Product>(environment.api_url_products + '/' + product.id, product);
  }

  findById(id: number): Observable<Product> {
    return this.httpClient.get<Product>(environment.api_url_products + '/' + id);
  }

  remove(product: Product): Observable<Product> {
    return this.httpClient.delete<Product>(environment.api_url_products + '/' + product.id);
  }
}

