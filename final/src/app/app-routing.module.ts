import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListTicketComponent} from './ticket/list/list-ticket.component';
import {CreateTicketComponent} from './ticket/create/create-ticket.component';
import {HomeComponent} from './home/home/home.component';


const routes: Routes = [{
  path: '',
  component: HomeComponent
}, {
  path: 'tickets',
  component: ListTicketComponent
}
  ,
  {
    path: 'tickets/create',
    component: CreateTicketComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
