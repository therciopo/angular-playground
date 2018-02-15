import { Component } from '@angular/core';
import { ProductListComponent } from './products/product-list.component';


@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template: `<div><h1>{{pageTitle}}</h1>
  <app-products></app-products>
  </div>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title1 = 'Angular App';
  name = 'Acme';
}
