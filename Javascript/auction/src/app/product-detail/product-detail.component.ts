import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, ProductService, Comment } from '../shared/product.service';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: Product;
  comments: Comment [];
  constructor(private routeInfo: ActivatedRoute, private productService: ProductService) { }

  ngOnInit() {
    const ProductId: number = this.routeInfo.snapshot.params['productId'];
    this.product = this.productService.getProduct(ProductId);
    this.comments = this.productService.getCommentsForProductId(ProductId);
    console.log(this.product);
  }

}
