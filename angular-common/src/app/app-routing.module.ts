import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CommonModule} from '@angular/common';
import {AppModule} from './app.module';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule, AppModule],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
