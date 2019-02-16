<<<<<<< HEAD
import { Component, OnChanges, Input, EventEmitter, Output } from '@angular/core';
import { IProduct } from '../products/product';

@Component({
    selector: 'app-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {
    @Input() rating: number;
    @Input() product: IProduct;
    starWidth: number;
    @Output() ratingClicked: EventEmitter<IProduct> =
        new EventEmitter<IProduct>();

    ngOnChanges(): void {
        this.starWidth = this.rating * 86 / 5;
    }
    onClick(): void {
        this.ratingClicked.emit(this.product);
=======
import { Component, OnChanges, Input, EventEmitter, Output, OnInit } from '@angular/core';
import { IProduct } from '../products/product';

@Component({
     selector: 'app-star',
     templateUrl: './star.component.html',
     styleUrls: ['./star.component.css']
})
export class StarComponent
implements OnInit, OnChanges {
    @Input() rating: number;
    // @Input() itemId: number;
    @Output() ratingClick: EventEmitter<IProduct> = new EventEmitter<IProduct>();
    @Input() product: IProduct;

    inpustName: string;
    ngOnInit() {
      this.inpustName = this.product.productId + '_rating';
    }

    ngOnChanges(): void {
        this.rating = this.product.starRating;
    }
    onClick(rating: number): void {
          this.rating = rating;
          this.product.starRating = rating;
         this.ratingClick.emit(this.product);
>>>>>>> a864aa9956c11d7d57f63f7d01e84e4fdeea9f7c
    }
}
