import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListCustomerComponent} from './customer/list/list-customer.component';
import {CreateCustomerComponent} from './customer/create/create-customer.component';
import {EditCustomerComponent} from './customer/edit/edit-customer.component';
import {HomeComponent} from './home/home/home.component';

const routes: Routes = [{
  path: '',
  component: HomeComponent
}, {
  path: 'customers',
  component: ListCustomerComponent
}, {
  path: 'customers/create',
  component: CreateCustomerComponent
}, {
  path: 'customers/edit/:id',
  component: EditCustomerComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
