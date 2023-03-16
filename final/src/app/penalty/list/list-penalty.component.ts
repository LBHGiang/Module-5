import {Component, OnInit} from '@angular/core';
import {PenaltyService} from '../../service/penalty.service';
import {Penalty} from '../../model/penalty';
import {PagePenaltyDto} from '../../dto/page-penalty-dto';

@Component({
  selector: 'app-list-ticket',
  templateUrl: './list-penalty.component.html',
  styleUrls: ['./list-penalty.component.css']
})
export class ListPenaltyComponent implements OnInit {

  pagePenaltyDto: PagePenaltyDto;
  playerName: string;
  deletePenalty: Penalty;

  constructor(private penaltyService: PenaltyService) {
  }

  ngOnInit(): void {
    this.playerName = '';
    this.search(0);
  }

  search(pageNumber: number) {
    this.penaltyService.search(this.playerName, pageNumber).subscribe(data => {
      this.pagePenaltyDto = data;
    }, error => {
      this.penaltyService.showErrorNotification('Không thể kết nối đến Server.');
    });
  }

  gotoPage(pageNumber: number) {
    this.search(pageNumber);
  }

  sendToModal(id: string) {
    this.penaltyService.findById(id).subscribe(data => {
      this.deletePenalty = data;
    }, error => {
      this.penaltyService.showErrorNotification('Không thể tìm thấy penalty.');
    });
  }

  delete(id: string) {
    console.log(id);
    this.penaltyService.remove(id).subscribe(data => {
      this.penaltyService.showSuccessNotification('Xoá thành công');
    }, err => {
      this.penaltyService.showErrorNotification('Xoá thất bại!');
    }, () => {
      this.ngOnInit();
    });
  }
}

