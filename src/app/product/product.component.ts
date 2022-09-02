import { Component, OnInit, TemplateRef } from '@angular/core';
import { ProductService } from '../services/product.service';
import { IProduct } from './product';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { FormControl, Validators } from '@angular/forms';
import { ICart } from '../cart/cart';
import { timeout } from 'rxjs';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  public products = [] as any;
  public selectedProduct = <IProduct>{};
  public modalTitle = '';
  public btnTitle = '';
  public name = new FormControl('', Validators.required);
  public description = new FormControl('', Validators.required);
  public price = new FormControl('', Validators.required);
  public showError = false;
  modalRef?: BsModalRef;
  public userId = localStorage.getItem('userId');

  constructor(private service: ProductService, private modalService: BsModalService) { }

  openModal(template: TemplateRef<any>, product?: IProduct) {
    if (product) {
      this.modalTitle = 'Edit Product';
      this.btnTitle = 'Update';
      this.selectedProduct = product;

      this.name.setValue(product.name);
      this.description.setValue(product.description);
      this.price.setValue(product.price);
    } else {
      this.modalTitle = 'Add Product';
      this.btnTitle = 'Save';
      this.reset();

    }
    this.modalRef = this.modalService.show(template);
  }

  ngOnInit(): void {
    this.getList();
  }

  getList() {
    // this.service.list()
    //   .subscribe(response => {console.log(response);
    //   this.products = response
    //   });
    this.service.list()
      .subscribe(response => {
        // setTimeout(() => {
          this.products = response;
        console.log(response);
        // }, 5000);

      });
  }


  delete(product: IProduct) {
    this.service.delete(product)
      .subscribe(response => this.getList());
  }

  save() {

    if (!this.name.value || !this.description.value || !this.price.value) {
      this.showError = true;
      return;
    }

    this.selectedProduct.name = this.name.value;
    this.selectedProduct.description = this.description.value;
    this.selectedProduct.price = this.price.value;

    if (this.btnTitle == 'Update') {
      this.service.update(this.selectedProduct)
        .subscribe(response => {
          this.getList();
          this.reset();
          this.showError = false;
          this.modalRef?.hide();
        });
    } else {
      this.service.add(this.selectedProduct)
        .subscribe(response => {
          this.getList();
          this.reset();
          this.showError = false;
          this.modalRef?.hide();
        });
    }
  }



  reset() {
    this.name.reset();
    this.description.reset();
    this.price.reset();
  }

  addToCart(id: any) {

    let cartProduct = {
      'id_user': this.userId,
      'id_product': id,
      'quantity': 1,

    }
    this.service.addProductToCart(cartProduct)
      .subscribe(response => console.log(response)
      );
    alert('Product added to the cart!')
  }


}
