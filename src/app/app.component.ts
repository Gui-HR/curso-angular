import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { ParentDataComponent } from './components/parent-data/parent-data.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { IfRenderComponent } from './components/if-render/if-render.component';
import { EventTestComponent } from './components/event-test/event-test.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
  FirstComponentComponent,
  ParentDataComponent,
  DirectivesComponent,
  IfRenderComponent,
  EventTestComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  icecream: string = 'Baunilha'
  userData = {
    name: 'Emert',
    class: 'Elfo',
    element: 'Wind',
    borned: 'Guarulhos'
  }

  title = 'curso-angular';
}
