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
    }
}
