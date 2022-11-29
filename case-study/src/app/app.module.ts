import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home/home.component';
import {HeaderComponent} from './layout/header/header.component';
import {FooterComponent} from './layout/footer/footer.component';
import {ListFacilityComponent} from './facility/list/list-facility.component';
import {CreateFacilityComponent} from './facility/create/create-facility.component';
import {EditFacilityComponent} from './facility/edit/edit-facility.component';
import {NavbarFacilityComponent} from './facility/navbar/navbar-facility.component';
import {NavbarComponent} from './layout/navbar/navbar.component';
import {NavbarCustomerComponent} from './customer/navbar/navbar-customer.component';
import {ListCustomerComponent} from './customer/list/list-customer.component';
import {CreateCustomerComponent} from './customer/create/create-customer.component';
import {EditCustomerComponent} from './customer/edit/edit-customer.component';
import {NavbarContractComponent} from './contract/navbar/navbar-contract.component';
import {ListContractComponent} from './contract/list/list-contract.component';
import {CreateContractComponent} from './contract/create/create-contract.component';
import {DeleteCustomerComponent} from './customer/delete-customer/delete-customer.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ListFacilityComponent,
    CreateFacilityComponent,
    EditFacilityComponent,
    NavbarFacilityComponent,
    NavbarComponent,
    NavbarCustomerComponent,
    ListCustomerComponent,
    CreateCustomerComponent,
    EditCustomerComponent,
    NavbarContractComponent,
    ListContractComponent,
    CreateContractComponent,
    DeleteCustomerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
}
