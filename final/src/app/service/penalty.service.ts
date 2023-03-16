import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Penalty} from '../model/penalty';
import {environment} from '../../environments/environment';
import {ToastrService} from 'ngx-toastr';
import {PagePenaltyDto} from '../dto/page-penalty-dto';
import {PagePlayerDto} from '../dto/page-player-dto';

@Injectable({
  providedIn: 'root'
})
export class PenaltyService {

  constructor(private httpClient: HttpClient,
              private toastrService: ToastrService) {
  }

  search(playerName: string, pageNumber): Observable<PagePenaltyDto> {
    return this.httpClient.get<PagePenaltyDto>(
      environment.api_url_penalties_search + '?page=' + pageNumber + '&playerName=' + playerName);
  }

  findById(id: string): Observable<Penalty> {
    return this.httpClient.get<Penalty>(environment.api_url_penalties_find + id);
  }

  remove(id: string): Observable<Penalty> {
    return this.httpClient.delete<Penalty>(environment.api_url_penalties_remove + id);
  }

  getTop(pageNumber: number): Observable<PagePlayerDto> {
    return this.httpClient.get<PagePlayerDto>(
      environment.api_url_players + '?page=' + pageNumber);
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


