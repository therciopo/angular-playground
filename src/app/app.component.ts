import { Component } from '@angular/core';
import { ProductListComponent } from './products/product-list.component';


@Component({
  selector: 'app-root',
<<<<<<< HEAD
  // templateUrl: './app.component.html',
  template: `<div><h1>{{pageTitle}}</h1>
  <app-products></app-products>
  </div>`,
  styleUrls: ['./app.component.css']
=======
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
>>>>>>> a864aa9956c11d7d57f63f7d01e84e4fdeea9f7c
})
export class AppComponent {
  pageTitle = 'Acme Product Management';
  name = 'Acme';
}
