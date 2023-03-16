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
import {ListCustomerComponent} from './customer/list/list-customer.component';
import {CreateCustomerComponent} from './customer/create/create-customer.component';
import {EditCustomerComponent} from './customer/edit/edit-customer.component';
import {NavbarContractComponent} from './contract/navbar/navbar-contract.component';
import {ListContractComponent} from './contract/list/list-contract.component';
import {CreateContractComponent} from './contract/create/create-contract.component';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToastrModule} from 'ngx-toastr';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';

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
    ListCustomerComponent,
    CreateCustomerComponent,
    EditCustomerComponent,
    NavbarContractComponent,
    ListContractComponent,
    CreateContractComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    ReactiveFormsModule,
    NgxPaginationModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
}
