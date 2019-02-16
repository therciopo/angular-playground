import {Component, OnInit} from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
    selector: 'app-products',
    templateUrl: './product-list-component.html',
    styleUrls: ['./product-list-component.css']
})

export class ProductListComponent
 implements OnInit {
    pageTitle = 'Product List';
    imageWidth = 40;
    imageMargin = 2;
    showImage = false;
    ratingClicked: number;
    itemIdRatingClicked: number;
    errorMessage: '';

    _listFilter: string;
    public get listFilter(): string {
        return this._listFilter;
    }
    public set listFilter(value: string) {
        this._listFilter = value;
        this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
    }

    constructor(private _productService: ProductService) {
    }

    filteredProducts: IProduct[];
    products: IProduct[] = [];
    toggleImage(): void {
        this.showImage = !this.showImage;
    }
    ngOnInit(): void {
        console.log('On Init');


        this._productService.getProducts()
                .subscribe(products => {
                    this.products = products;
                    this.filteredProducts = this.products;
                },
                error => this.errorMessage = <any>error);
    }
    performFilter(filterBy: string): IProduct[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter((product: IProduct) =>
              product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }

    onRatingClick(product: IProduct): void {
        const item = this.products.filter((p: IProduct) => p.productId === product.productId);
        if (!!item && item.length === 1) {
            item[0].starRating = product.starRating;
            this.ratingClicked = product.starRating;
            this.itemIdRatingClicked = product.productId;
        }

        this.pageTitle = 'Product List:' + product.starRating;
    }
}
