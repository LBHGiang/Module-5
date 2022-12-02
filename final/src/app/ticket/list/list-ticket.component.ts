import {Component, OnInit} from '@angular/core';
import {TicketService} from '../../service/ticket.service';
import {Ticket} from '../../model/ticket';
import {Garage} from '../../model/garage';

@Component({
  selector: 'app-list-ticket',
  templateUrl: './list-ticket.component.html',
  styleUrls: ['./list-ticket.component.css']
})
export class ListTicketComponent implements OnInit {

  tickets: Ticket[];
  ticketDetail: Ticket | undefined;
  garages: Garage[];
  p = 1;
  count = 5;
  searchFromPlace = '';
  searchToPlace = '';
  searchStartDate = '2022-12-02';
  searchStartDate2 = '2023-01-02';

  constructor(private ticketService: TicketService) {
  }

  ngOnInit(): void {
    this.resetData();
    this.getGarages();
    // this.findNameEmailTicketType();
    this.getAll();
  }

  findTwoField() {
    this.p = 1;
    this.ticketService.searchTwoField(this.searchFromPlace, this.searchToPlace).subscribe(data => {
      this.tickets = data;
    }, error => {
      this.ticketService.showErrorNotification('Không thể kết nối đến Server');
    });
  }

  getAll() {
    this.ticketService.findAll().subscribe(data => {
      this.tickets = data;
    }, error => {
      this.ticketService.showErrorNotification('Không thể kết nối đến Server');
    });
  }

  getGarages() {
    this.ticketService.findAllTicketTypes().subscribe(
      data => {
        this.garages = data;
      }, error => {
        this.ticketService.showErrorNotification('Có lỗi khi tải Loại khách hàng!');
      }
    );
  }

  resetData() {
    this.searchFromPlace = '';
    this.searchToPlace = '';
    this.searchStartDate = '2022-12-02';
    this.searchStartDate2 = '2023-01-02';
  }

  search4Field() {
    this.p = 1;
    this.ticketService.searchTwoField(
      this.searchFromPlace, this.searchToPlace).subscribe(
      data => {
        this.tickets = data.filter(value => {
          const searchDate = new Date(value.startDate);
          const searchStart = new Date(this.searchStartDate);
          const searchEnd = new Date(this.searchStartDate2);
          if (searchDate >= searchStart && searchDate <= searchEnd) {
            return data;
          }
        });
      }
    );
  }

  buyConfirm(id: number) {
    this.ticketService.findById(id).subscribe(data => {
      this.ticketDetail = data;
    });
  }

  buyTicket() {
    this.ticketDetail.quantity = this.ticketDetail.quantity - 1;
    this.ticketService.update(this.ticketDetail).subscribe(data => {
        this.ticketService.showSuccessNotification('Đặt vé thành công!');
      }, error => {
        this.ticketService.showErrorNotification('Có lỗi khi đặt vé!');
      }, () => {
        this.ngOnInit();
      }
    );
  }
}

