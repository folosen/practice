import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {Observable} from 'rxjs';
import 'rxjs/Rx';

@Injectable()
export class ProductService {

  // private products: Product[] = [
  //   new Product(1, '第一个商品', 1.99, 3.5, '这是一个商品，是我在学习慕课网Angular入门实战时创建的', ['电子产品', '硬件设备']),
  //   new Product(2, '第二个商品', 2.99, 2.5, '这是二个商品，是我在学习慕课网Angular入门实战时创建的', ['图书']),
  //   new Product(3, '第三个商品', 3.99, 4.5, '这是三个商品，是我在学习慕课网Angular入门实战时创建的', ['硬件设备']),
  //   new Product(4, '第四个商品', 4.99, 1.5, '这是四个商品，是我在学习慕课网Angular入门实战时创建的', ['电子产品', '硬件设备']),
  //   new Product(5, '第五个商品', 5.99, 3.5, '这是五个商品，是我在学习慕课网Angular入门实战时创建的', ['电子产品']),
  //   new Product(6, '第六个商品', 6.99, 2.5, '这是六个商品，是我在学习慕课网Angular入门实战时创建的', ['图书'])
  // ];
  private comments: Comment[] = [
    new Comment(1, 1, '2017-02-02 22:22:22', '张三', 3, '东西不错'),
    new Comment(2, 1, '2017-02-02 22:22:22', '张四', 4, '东西是不错'),
    new Comment(3, 1, '2017-02-02 22:22:22', '张五', 2, '东西挺不错'),
    new Comment(4, 1, '2017-02-02 22:22:22', '张六', 4, '东西真不错'),
    new Comment(5, 2, '2017-02-02 22:22:22', '张七', 5, '东西不错'),
    new Comment(6, 2, '2017-02-02 22:22:22', '张八', 5, '东西不错')
  ];

  constructor(private http: Http) {
  }

  getAllCategories(): string[] {
    return ['电子产品', '硬件设备', '图书'];
  }

  getProducts(): Observable<Product[]> {
    return this.http.get('/api/products').map(res => res.json());
  }

  getProduct(id: number): Observable<Product> {
    return this.http.get('/api/product/' + id).map(res => res.json());
  }

  getCommentsForProductId (id: number): Comment[] {
    return this.comments.filter((comment: Comment) => comment.productId === id || comment.productId.toString() === id.toString() );
  }

}
export class Product {
  constructor(
    public id: number,
    public title: string,
    public price: number,
    public rating: number,
    public desc: string,
    public categories: Array<string>
  ) {

  }
}

export class Comment {
  constructor(
    public id: number,
    public productId: number,
    public timestamp: string,
    public user: string,
    public rating: number,
    public content: string
  ) {

  }
}
