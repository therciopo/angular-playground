import { Component } from '@angular/core';
import { DataService } from '../shared/dataService';

@Component({
  selector: 'app-checkout',
  templateUrl: 'checkout.component.html',
  styleUrls: ['checkout.component.css']
})
export class CheckoutComponent {

  constructor(public data: DataService) {
  }

  onCheckout() {
    // TODO
    alert('Doing checkout');
  }
}
