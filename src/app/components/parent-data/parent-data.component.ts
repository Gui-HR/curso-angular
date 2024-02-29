import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-parent-data',
  standalone: true,
  imports: [],
  templateUrl: './parent-data.component.html',
  styleUrl: './parent-data.component.css'
})
export class ParentDataComponent {
  @Input() icecream: string = ''
  @Input() userData!: {
    name: string,
    class: string,
    element: string,
    borned: string,
  }

}
