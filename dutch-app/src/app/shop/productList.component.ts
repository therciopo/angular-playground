import { Component } from '@angular/core';

@Component({
    selector: 'app-product-list',
    templateUrl: 'productList.component.html',
    styles: []
})
export class ProductListComponent {
public products = [{
    title: 'First Product',
    price: '19.99',
}, {
    title: 'Second Product',
    price: '9.99',
}, {
    title: 'Third Product',
    price: '14.99',
}
];
}
