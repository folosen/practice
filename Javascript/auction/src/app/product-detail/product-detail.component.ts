import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, ProductService, Comment } from '../shared/product.service';
import {Observable, Subscription} from 'rxjs';
import { WebSocketService } from '../shared/web-socket.service';
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
  public isWatched: boolean = false;
  public currentBid: number;
  public subcription: Subscription;
  constructor(private routeInfo: ActivatedRoute, private productService: ProductService, private wsServer: WebSocketService) { }

  ngOnInit() {
    const ProductId: number = this.routeInfo.snapshot.params['productId'];
    this.productService.getProduct(ProductId).subscribe(
      product => {
        this.product = product;
        this.currentBid = product.price;
      }
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

  watchProduct() {
    if (this.subcription) {
      this.subcription.unsubscribe();
      this.isWatched = false;
      this.subcription = null;
    } else {
      this.isWatched = true;
      this. subcription = this.wsServer.createObservableSocket('ws://localhost:8085', this.product.id).subscribe(
        products => {
          let product = products.find(p => p.productId === this.product.id);
          this.currentBid = product.bid;
        }
      );
    }
  }
}
