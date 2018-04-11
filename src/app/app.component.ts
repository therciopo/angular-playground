import { Component } from '@angular/core';
import { ProductListComponent } from './products/product-list.component';
import { ProductService } from './products/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ ProductService]
})
export class AppComponent {
  pageTitle = 'Acme Product Management';
  name = 'Acme';
}
