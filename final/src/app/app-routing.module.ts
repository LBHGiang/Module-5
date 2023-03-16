import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListPenaltyComponent} from './penalty/list/list-penalty.component';
import {TopPlayerComponent} from './penalty/top-player/top-player.component';


const routes: Routes = [{
  path: '',
  component: ListPenaltyComponent
}, {
  path: 'penalties',
  component: ListPenaltyComponent
}, {
  path: 'players',
  component: TopPlayerComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
