import { Component, OnInit } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { IProduct } from '../product/product';
import { DataService } from '../services/data.service';
import { ProductService } from '../services/product.service';
import { ICart } from './cart';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  public products = [] as any;
  public userId = localStorage.getItem('userId');
  cartItemToUpdate: any;
  total: number = 0;

  constructor(private service: ProductService, private serviceProduct: ProductService, private modalService: BsModalService) { }

  ngOnInit(): void {
    this.getList();
  }

  getList() {

    this.serviceProduct.listCart(this.userId)
      .subscribe(response => {
        this.products = response;
        console.log(response);

      });
  }

  deleteCart(cartItemId: any) {
    this.service.deleteFromCart(cartItemId)
      .subscribe(res => {
        console.log(res);

        this.getList();

      });
    alert("Product removed from the cart");

  }


  updateQuantityPlus(cartId: number, quantity: number) {

    console.log(cartId, quantity);

    this.cartItemToUpdate = { 'quantity': quantity + 1 }

    this.service.quantityUpdate(cartId, this.cartItemToUpdate)
      .subscribe(res => {
        console.log(res);
        // this.reset();
        this.getList();
      });
  }


  updateQuantityMinus(cartId: number, quantity: number) {

    if (quantity == 1) {
      this.deleteCart(cartId);
    }

    if (quantity > 1) {
      this.cartItemToUpdate = { 'quantity': quantity - 1 }

      this.service.quantityUpdate(cartId, this.cartItemToUpdate)
        .subscribe(res => {
          this.reset();
          this.getList();
        });
    }

  }


  priceMoltiplicator(a: number, b: number) {
    // return Math.round(a*b);
    let c = a * b;

    return c.toFixed(2);

  }


  purchaseOrders() {

    console.log(this.products);

    this.service.addCartToOrders(this.products)
      .subscribe(res => {
        console.log(res);
      });

  }


  reset() {
    this.total = 0;
  }


}
