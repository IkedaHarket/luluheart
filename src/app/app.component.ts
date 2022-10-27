import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 @ViewChild('btn') button!: ElementRef<HTMLButtonElement>;

  label:string = "¿Me quieres?"
  love: boolean = false;
  move(){
    this.button.nativeElement.style.top = 
    this.randomNumber(document.documentElement.clientHeight) +"px";
    this.button.nativeElement.style.left = 
    this.randomNumber(document.documentElement.clientWidth) +"px";

  }
  randomNumber(max:number) {
    return Math.round(Math.random() * ((max - 100) - 100) + 100);
  }

  wiii(){
    this.label = "La quiero mucho ;3"
    this.love = true;
  }
  jum(){
    this.label = "Yo si la quiero <3"
  }
}
