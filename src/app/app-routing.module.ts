import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';
import { ProductComponent } from './product/product.component';
import { RegistrationComponent } from './registration/registration.component';
import { UserReservedPageComponent } from './user-reserved-page/user-reserved-page.component';
import { HomepageComponent } from './homepage/homepage.component';
import { OrdersComponent } from './orders/orders.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'products', component: ProductComponent, canActivate: [AuthGuard] },
  { path: 'registration', component: RegistrationComponent },
  { path: 'userArea', component: UserReservedPageComponent },
  { path: 'cart', component: CartComponent },
  { path: 'homePage', component: HomepageComponent },
  { path: 'orders', component: OrdersComponent },
  { path: 'confirmationPage', component: ConfirmationComponent },
  
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
