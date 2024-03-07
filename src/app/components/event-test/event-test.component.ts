import { NgIf, NgStyle } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-event-test',
  standalone: true,
  imports: [
    NgStyle,
    NgIf
  ],
  templateUrl: './event-test.component.html',
  styleUrl: './event-test.component.css'
})
export class EventTestComponent {
  colorSelected = [true, false, false, false] // Da pra fazer com classes CSS
  ballSelected = ['#707070', '#333333', '#333333', '#333333']
  

  leftTradeColors(): void {
    const trueColor = this.colorSelected.indexOf(true)
    
    if(trueColor === 0) {
      this.colorSelected[trueColor] = false
      this.ballSelected[trueColor] = '#333333'
      this.colorSelected[3] = true
      this.ballSelected[3] = '#707070'
      return
    }

    this.colorSelected[trueColor - 1] = true
    this.ballSelected[trueColor - 1] = '#707070'
    this.colorSelected[trueColor] = false
    this.ballSelected[trueColor] = '#333333'
  }

  rightTradeColors(): void {
    const trueColor = this.colorSelected.indexOf(true)

    if(trueColor === 3) {
      this.colorSelected[trueColor] = false
      this.ballSelected[trueColor] = '#333333'
      this.colorSelected[0] = true
      this.ballSelected[0] = '#707070'
      return
    }

    this.colorSelected[trueColor + 1] = true
    this.ballSelected[trueColor + 1] = '#707070'
    this.colorSelected[trueColor] = false
    this.ballSelected[trueColor] = '#333333'
  }
}
