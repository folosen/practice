import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, ProductService, Comment } from '../shared/product.service';
import {Observable} from 'rxjs';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  public product: Product;
  public comments: Comment [];
  public newRating: number = 5;
  public newComment: string = '';
  public isCommentHidden: boolean = true;
  constructor(private routeInfo: ActivatedRoute, private productService: ProductService) { }

  ngOnInit() {
    const ProductId: number = this.routeInfo.snapshot.params['productId'];
    this.productService.getProduct(ProductId).subscribe(
      product => this.product = product
    );
    this.productService.getCommentsForProductId(ProductId).subscribe(
      comments => this.comments = comments
    );
  }

  addComment() {
    const comment = new Comment(0, this.product.id, new Date().toISOString(), 'someone', this.newRating, this.newComment);
    this.comments.unshift(comment);

    const sum = this.comments.reduce( (startSum: number, startComment: Comment) => startSum + startComment.rating, 0);
    this.product.rating = sum / this.comments.length;

    this.newComment = null;
    this.newRating = 5;
    this.isCommentHidden = true;
  }
}
