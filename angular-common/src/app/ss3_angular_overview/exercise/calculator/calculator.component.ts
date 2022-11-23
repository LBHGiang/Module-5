import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  num1: number;
  num2: number;
  result: number;
  message: string;

  add() {
    this.result = this.num1 + this.num2;
  }

  sub() {
    this.result = this.num1 - this.num2;
  }

  mul() {
    this.result = this.num1 * this.num2;
  }

  div() {
    if (this.num2 === 0) {
      this.message = 'Cannot divide by 0';
    } else {
      this.message = '';
    }
    this.result = this.num1 / this.num2;
  }

  constructor() {
  }

  ngOnInit(): void {
  }

}
