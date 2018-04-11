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
     this.product = {
      'productId': id,
      'productName': 'Leaf Rake',
      'productCode': 'GDN-0011',
      'releaseDate': 'March 19, 2016',
      'description': 'Leaf rake with 48-inch wooden handle.',
      'price': 19.95,
      'starRating': 3,
      'imageUrl': 'http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png'
    };
    // const param = this._route.snapshot.paramMap.get('id');
    // if (param) {
    //   const id = +param;
    //   this.getProduct(id);
    // }
  }

  getProduct(id: number) {
    this._productService.getProduct(id).subscribe(
      product => this.product = product,
      error => this.errorMessage = <any>error);
  }

  onBack(): void {
    this._router.navigate(['/products']);
  }
}
