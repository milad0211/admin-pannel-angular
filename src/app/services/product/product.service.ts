import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constant } from '../constant/constant';
import { CategoryResponse, ProductResponse, ProductsType } from 'src/app/develop/models/products';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getCategory(): Observable<CategoryResponse> { // تعیین نوع برگشتی
    return this.http.get<CategoryResponse>(Constant.API_END_POINT + Constant.METHODS.GET_ALL_CATEGORY);
  }
  getProducts(): Observable<ProductResponse> { // تعیین نوع برگشتی
    return this.http.get<ProductResponse>(Constant.API_END_POINT + Constant.METHODS.GET_ALL_PRODUCT);
  }
  
  saveProduct(obj:ProductsType): Observable<CategoryResponse> { 
    return this.http.post<CategoryResponse>(Constant.API_END_POINT + Constant.METHODS.CREATE_PRODUCT,obj);
  }

  updateProduct(obj:ProductsType): Observable<CategoryResponse> { 
    return this.http.post<CategoryResponse>(Constant.API_END_POINT + Constant.METHODS.UPDATE_PRODUCT,obj);
  }
  deleteProduct(id:number): Observable<CategoryResponse> { 
    return this.http.get<CategoryResponse>(Constant.API_END_POINT + Constant.METHODS.DELETE_PRODUCT + id);
  }
}
