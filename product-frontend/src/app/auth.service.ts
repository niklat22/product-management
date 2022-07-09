import { Injectable, Injector } from '@angular/core';

import { Router } from '@angular/router';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
// import { MatDialog } from  '@angular/material/dialog';
import { environment } from '../environments/environment';
// import { environment } from '../environments/environment.prod';

import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { Product } from './product';
// import { DialogErrorComponent } from './dialog-error/dialog-error.component';
// import { DialogEmailErrorComponent } from './dialog-email-error/dialog-email-error.component';
// import { EditProfileComponent } from './edit-profile/edit-profile.component';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private httpClient: HttpClient, public router: Router, private injector: Injector){ }

  redirectUrl: string;

  createProduct(data): Observable<any> {
    return this.httpClient.post(`${environment.apiUrl}/product/productInsert`, data).pipe(
      map((res: Response) => {
        return res || {}
      }),
      catchError(this.handleError)
    );
  }

  getproducts(): Observable<any>{
    return this.httpClient.get(`${environment.apiUrl}/product/getproducts`, { headers: this.headers }).pipe(
      map((res: Response) => {
        return res || {}
      }),
      catchError(this.handleError)
    )
  }

  getEditproducts(id: any): Observable<any>{
    return this.httpClient.get(`${environment.apiUrl}/product/getEditproducts?id=${id}`, { headers: this.headers }).pipe(
      map((res: Response) => {
        return res || {}
      }),
      catchError(this.handleError)
    )
  }

  productDelete(id: any): Observable<any>{
    return this.httpClient.post(`${environment.apiUrl}/product/productDelete`, { productId: id }).pipe(
      map((res: Response) => {
        return res || {}
      }),
      catchError(this.handleError)
    )
  }

  productUpdate(product: Product): Observable<any> {
    console.log("-=productUpdate", product);
    
    return this.httpClient.post(`${environment.apiUrl}/product/productUpdate`, product).pipe(
        catchError(this.handleError)
    )
  }

  private handleError(error: HttpErrorResponse) {
    let msg = '';
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
      msg = 'An error occurred:', error.error.message;
    } else {
      console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
      msg = 'Backend returned code ${error.status}, ` + `body was: ${error.error}'
    }
    return throwError(msg);
  }

}
