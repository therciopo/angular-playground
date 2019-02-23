import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Product } from '../shared/product';

@Injectable()
export class DataService {

    constructor(private http: HttpClient) { }

    public products: Product[] = [];


    loadProducts(): Observable<boolean> {
        return this.http.get('http://localhost:8800/api/Products')
        .pipe(
            map((data: any[]) => {
                this.products = data;
                return true;
            }));
        }
}

