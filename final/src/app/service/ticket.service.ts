import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Ticket} from '../model/ticket';
import {environment} from '../../environments/environment';
import {Garage} from '../model/garage';
import {ToastrService} from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor(private httpClient: HttpClient,
              private toastrService: ToastrService) {
  }

  findAll(): Observable<Ticket[]> {
    return this.httpClient.get<Ticket[]>(environment.api_url_tickets + '?_sort=id&_order=desc');
  }

  searchTwoField(from: string, to: string): Observable<Ticket[]> {
    return this.httpClient.get<Ticket[]>(
      `${environment.api_url_tickets}?fromPlace_like=${from}&toPlace_like=${to}`
    );
  }

  save(ticket: Ticket): Observable<Ticket> {
    return this.httpClient.post<Ticket>(environment.api_url_tickets, ticket);
  }

  update(ticket: Ticket): Observable<Ticket> {
    return this.httpClient.patch<Ticket>(environment.api_url_tickets + '/' + ticket.id, ticket);
  }

  findById(id: number): Observable<Ticket> {
    return this.httpClient.get<Ticket>(environment.api_url_tickets + '/' + id);
  }

  remove(ticket: Ticket): Observable<Ticket> {
    return this.httpClient.delete<Ticket>(environment.api_url_tickets + '/' + ticket.id);
  }

  findAllTicketTypes(): Observable<Garage[]> {
    return this.httpClient.get<Garage[]>(environment.api_url_garages);
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


