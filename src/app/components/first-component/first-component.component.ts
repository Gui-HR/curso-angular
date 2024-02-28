import { Component } from '@angular/core';

@Component({
  selector: 'app-first-component',
  standalone: true,
  imports: [],
  templateUrl: './first-component.component.html',
  styleUrl: './first-component.component.css'
})
export class FirstComponentComponent {
  name: string = 'Gilerme'
  age: number = 20
  dogs = ['Trufa', 'Fini', 'Rubi']
  car = {
    color: 'Black',
    brand: 'Honda',
    name: 'Civic'
  }
}
