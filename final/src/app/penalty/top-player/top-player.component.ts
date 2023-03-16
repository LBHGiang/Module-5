import {Component, OnInit} from '@angular/core';
import {PenaltyService} from '../../service/penalty.service';
import {PagePenaltyDto} from '../../dto/page-penalty-dto';
import {PagePlayerDto} from '../../dto/page-player-dto';

@Component({
  selector: 'app-list-ticket',
  templateUrl: './top-player.component.html',
  styleUrls: ['./top-player.component.css']
})
export class TopPlayerComponent implements OnInit {

  pagePlayerDto: PagePlayerDto;

  constructor(private penaltyService: PenaltyService) {
  }

  ngOnInit(): void {
    this.search(0);
  }

  search(pageNumber: number) {
    this.penaltyService.getTop(pageNumber).subscribe(data => {
      this.pagePlayerDto = data;
    }, error => {
      this.penaltyService.showErrorNotification('Không thể kết nối đến Server.');
    });
  }

  gotoPage(pageNumber: number) {
    this.search(pageNumber);
  }

}

