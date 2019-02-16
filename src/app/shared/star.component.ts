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
    }
}
