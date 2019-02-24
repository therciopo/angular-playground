import { Component } from '@angular/core';
import { DataService } from '../shared/dataService';

@Component({
    selector: 'app-cart',
    templateUrl: 'cart.component.html',
    styleUrls: []
})
export class CartComponent {
    constructor(private data: DataService) {}
}
