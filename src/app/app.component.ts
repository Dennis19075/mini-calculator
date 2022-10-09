import { Component, Self } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'Mini Calculator';

  numbers: { [key: string]: string } = {"one":"1","two":"2","three":"3","four":"4","five":"5",
                                          "six":"6","seven":"7","eight":"8","nine":"9","zero":"0"};
  opers:{ [key: string]: string } = {"add":"+","sub":"-","multiply":"*","divide":"/"};
  oper: string = "0";
  result: number = 0;
  history: string[] = [];

  clean(){
    this.oper = "0";
    this.result = 0;
  }

  setOne(){
    if (this.oper == this.numbers["zero"]) {
      this.oper="";
      this.oper+= this.numbers["one"]
    } else {
      this.oper+= this.numbers["one"]
    }
  }

  setTwo(){
    if (this.oper == this.numbers["zero"]) {
      this.oper="";
      this.oper+= this.numbers["two"]
    } else {
      this.oper+= this.numbers["two"]
    }
  }

  setThree(){
    if (this.oper == this.numbers["zero"]) {
      this.oper="";
      this.oper+= this.numbers["three"]
    } else {
      this.oper+= this.numbers["three"]
    }
  }

  setFour(){
    if (this.oper == this.numbers["zero"]) {
      this.oper="";
      this.oper+= this.numbers["four"]
    } else {
      this.oper+= this.numbers["four"]
    }
  }

  setFive(){
    if (this.oper == this.numbers["zero"]) {
      this.oper="";
      this.oper+= this.numbers["five"]
    } else {
      this.oper+= this.numbers["five"]
    }
  }

  setSix(){
    if (this.oper == this.numbers["zero"]) {
      this.oper="";
      this.oper+= this.numbers["six"]
    } else {
      this.oper+= this.numbers["six"]
    }
  }

  setSeven(){
    if (this.oper == this.numbers["zero"]) {
      this.oper="";
      this.oper+= this.numbers["seven"]
    } else {
      this.oper+= this.numbers["seven"]
    }
  }

  setEight(){
    if (this.oper == this.numbers["zero"]) {
      this.oper="";
      this.oper+= this.numbers["eight"]
    } else {
      this.oper+= this.numbers["eight"]
    }
  }

  setNine(){
    if (this.oper == this.numbers["zero"]) {
      this.oper="";
      this.oper+= this.numbers["nine"]
    } else {
      this.oper+= this.numbers["nine"]
    }
  }

  setZero(){
    if (this.oper != this.numbers["zero"]) {
      this.oper+= this.numbers["zero"];
    }
  }

  add():void{
    if (this.oper != this.numbers["zero"] && Number(this.oper)) { //Number(value) checks if it is a valid number
      this.oper+= " " + this.opers["add"] + " ";
    }
  }

  substract():void{
    if (this.oper != this.numbers["zero"] && Number(this.oper)) { //Number(value) checks if it is a valid number
      this.oper+= " " + this.opers["sub"] + " ";
    }
  }

  multiply():void{
    if (this.oper != this.numbers["zero"] && Number(this.oper)) { //Number(value) checks if it is a valid number
      this.oper+= " " + this.opers["multiply"] + " ";
    }
  }

  divide():void{
    if (this.oper != this.numbers["zero"] && Number(this.oper)) { //Number(value) checks if it is a valid number
      this.oper+= " " + this.opers["divide"] + " ";
    }
  }

  equals():void{
    let splitted = this.oper.split(" ", 3);
    switch (splitted[1]) {
      case "+":
        this.result = Number(splitted[0]) + Number(splitted[2]);
        break;
      case "-":
        this.result = Number(splitted[0]) - Number(splitted[2]);
        break;
      case "*":
        this.result = Number(splitted[0]) * Number(splitted[2]);
        break;
      case "/":
        this.result = Number(splitted[0]) / Number(splitted[2]);
        break;
      default:
        break;
    }
    splitted.push('=', String(this.result));
    let hist = ""
    splitted.forEach(value => {
      hist+=" " + value + " ";
    });
    this.history.push(hist);
    this.oper = "0";
    console.log(this.history);
    
  }
}
