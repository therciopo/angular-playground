import { Component } from '@angular/core';
import { ProductListComponent } from './products/product-list.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  pageTitle = 'Acme Product Management';
  name = 'Acme';
}
