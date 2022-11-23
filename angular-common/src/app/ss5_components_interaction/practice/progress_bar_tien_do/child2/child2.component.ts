import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {

 backgroundColor = '#D9D9D9';
 progressColor = '#4CAF50';
 progress = 0;

  constructor() {
  }

  ngOnInit() {
    this.loading();
  }

  loading() {
    const interval = setInterval(() => {
      this.progress = +this.progress + 5;
      // tslint:disable-next-line:triple-equals
      if (this.progress == 100) {
        clearInterval(interval);
      }
    }, 1000);
  }
}
