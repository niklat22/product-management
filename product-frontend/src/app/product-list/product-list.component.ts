import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: any;
  currentProduct = null;
  currentIndex = -1;
  name = '';

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.readProducts();
  }

  readProducts(): void {
    this.authService.getproducts()
      .subscribe(
        products => {
          this.products = products.data;
          console.log(products);
        },
        error => {
          console.log(error);
        });
  }
  deleteProducts(id: any): void {
    this.authService.productDelete(id)
      .subscribe(
        products => {
          this.products = products.data;
          console.log(products);
        },
        error => {
          console.log(error);
        });
  }
}
