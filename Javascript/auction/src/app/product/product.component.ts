import { Component, OnInit } from '@angular/core';
import { ProductService, Product } from '../shared/product.service';
import { FormControl } from '../../../node_modules/@angular/forms';
import {Observable} from 'rxjs';
import 'rxjs/Rx';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  public products: Observable<Product[]>;
  // public keyword: string;
  // public titleFilter: FormControl = new FormControl();
  public imgUrl = 'http://placehold.it/320x150';
  constructor(private productService: ProductService) {
    // this.titleFilter.valueChanges
    //   .debounceTime(500)
    //   .subscribe(value => this.keyword = value);
  }

  ngOnInit() {
    this.products = this.productService.getProducts();
    this.productService.searchEvent.subscribe(
      params => this.products = this.productService.search(params)
    );
  }

}

