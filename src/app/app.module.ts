import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { HttpClientModule } from '@angular/common/http';
import { ModalModule } from 'ngx-bootstrap/modal';

import { ReactiveFormsModule } from '@angular/forms';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { UserReservedPageComponent } from './user-reserved-page/user-reserved-page.component';
import { CartComponent } from './cart/cart.component';
import { HomepageComponent } from './homepage/homepage.component';
import { OrdersComponent } from './orders/orders.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { ConfirmationPurchaseComponent } from './confirmation-purchase/confirmation-purchase.component';
// import { AuthGuard } from './auth.guard';




// const routes: Routes = [
//   {
//     path: '', component: ProductComponent,
//     canActivate: [AuthGuard]
//   },
//   {
//     path: 'register', component: RegistrationComponent
//   },
//   {
//     path: 'login', component: LoginComponent
//   },


// ];

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    RegistrationComponent,
    LoginComponent,
    UserReservedPageComponent,
    CartComponent,
    HomepageComponent,
    OrdersComponent,
    ConfirmationComponent,
    ConfirmationPurchaseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ModalModule.forRoot(),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
