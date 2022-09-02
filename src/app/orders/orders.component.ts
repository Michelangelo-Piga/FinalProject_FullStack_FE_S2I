import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { IProduct } from '../product/product';
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  public userId = localStorage.getItem('userId');
  serviceProduct: any;

  constructor(private service: ProductService) { }

  ngOnInit(): void {
    this.getList();
  }

  getList() {
// console.log('ciao');

    this.service.listOrders(this.userId)
      .subscribe(response => {
        this.serviceProduct = response;
        console.log(this.serviceProduct);

      });
  }



}
