import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mini Calculator';

  numberOne: number = 0;
  numberTwo: number = 0;
  result: number = 0;

  add():void{
    this.result = Number(this.numberOne) + Number(this.numberTwo);
  }

  substraction():void{
    this.result = Number(this.numberOne) - Number(this.numberTwo);
  }

  multiply():void{
    this.result = Number(this.numberOne) * Number(this.numberTwo);
  }

  divide():void{
    this.result = Number(this.numberOne) / Number(this.numberTwo);
  }
}
