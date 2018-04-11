import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pageTitle = 'Product Detail';
  errorMessage: string;
  product: IProduct;

  constructor(private _route: ActivatedRoute,
    private _router: Router,
    private _productService: ProductService) {
  }

  ngOnInit() {

     const id = +this._route.snapshot.paramMap.get('id');
     this.pageTitle += `: ${id}`;
     this.product = this.getProduct(id);
    // const param = this._route.snapshot.paramMap.get('id');
    // if (param) {
    //   const id = +param;
    //   this.getProduct(id);
    // }
  }

  // getProduct(id: number) {
  //   this._productService.getProduct(id).subscribe(
  //     product => this.product = product,
  //     error => this.errorMessage = <any>error);
  // }

  getProduct(id: number): IProduct {
     return this._productService.getProduct(id);
   }

  onBack(): void {
    this._router.navigate(['/products']);
  }
}
