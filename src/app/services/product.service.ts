import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ICart } from '../cart/cart';
import { IOrder } from '../orders/orders';
import { IProduct } from '../product/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private _urlProducts = 'http://127.0.0.1:8000/api/products';
  private _urlCartProducts = 'http://127.0.0.1:8000/api/cartProducts';
  $idUser = localStorage.getItem('userId');
  

  constructor(private http:HttpClient) { }

  list() : Observable<IProduct>{
    return this.http.get<IProduct>(environment._urlProducts);
  }

  add(product:IProduct) : Observable<IProduct>{
    return this.http.post<IProduct>(environment._urlProducts, product);
  }

  update(product:IProduct) : Observable<IProduct>{
    return this.http.put<IProduct>(`${environment._urlProducts}/${product.id}`, product);
  }

  delete(product:IProduct) : Observable<IProduct>{
    return this.http.delete<IProduct>(`${environment._urlProducts}/${product.id}`);
  }

 



  //CART


  listCart(idUser:any) : Observable<ICart>{
    return this.http.get<ICart>(environment._urlCartProducts + '/' + idUser);
  }

  addProductToCart(product:any){
    console.log(product);
    
    return this.http.post(environment.urlApiBase + 'api/addCartProduct',product);
  }

  deleteFromCart(cartProduct: any){
    return this.http.delete(`${environment._urlCartProducts}/${cartProduct}`);
  }

  quantityUpdate(itemId: any, cartProduct:ICart) : Observable<ICart>{
    return this.http.put<ICart>(`${environment._urlCartProducts}/${itemId}`, cartProduct);
  }

  
  addCartToOrders(products:any){
    return this.http.post(environment._urlOrderList2 + 'addCartToOrders', products);
  }




  //ORDERS


  listOrders(idUser:any) :Observable<IOrder>{
    return this.http.get<IOrder>(environment._urlOrderList +'/' + idUser);
  }



}


