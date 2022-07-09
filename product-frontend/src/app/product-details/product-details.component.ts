import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  currentProduct = null;
  message = '';

  constructor(
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.message = '';
    this.getProduct(this.route.snapshot.paramMap.get('id'));
  }

  getProduct(id): void {
    console.log("===-product._id", id);
    
    this.authService.getEditproducts(id)
      .subscribe(
        product => {
          this.currentProduct = product.data;
          console.log(product);
        },
        error => {
          console.log(error);
        });
  }

  updateProduct(): void {
    this.currentProduct.productId = this.currentProduct._id
    this.authService.productUpdate(this.currentProduct)
      .subscribe(
        response => {
          console.log(response);
          this.message = 'The product was updated!';
          this.router.navigate(['/']);
        },
        error => {
          console.log(error);
        });
  }

}
