import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Product } from '../shared/product';
import { Order, OrderItem } from '../shop/order';
import { ProductListComponent } from '../shop/productList.component';

@Injectable()
export class DataService {
  constructor(private http: HttpClient) {}

  public products: Product[] = [];

  public order: Order = new Order();

  loadProducts(): Observable<boolean> {
    return this.http.get('http://localhost:8800/api/Products').pipe(
      map((data: any[]) => {
        this.products = data;
        return true;
      })
    );
  }

  public addToOrder(newProduct: Product) {
    let item: OrderItem = this.order.items.find(i => i.productId === newProduct.id);

    if (item) {
        item.quantity ++;
    } else {
        item = new OrderItem();
        item.productId = newProduct.id;
        item.productArtist = newProduct.artist;
        item.productArtId = newProduct.artId;
        item.productCategory = newProduct.category;
        item.productSize = newProduct.size;
        item.productTitle = newProduct.title;
        item.unitPrice = newProduct.price;
        item.quantity = 1;

        this.order.items.push(item);
    }
  }
}
