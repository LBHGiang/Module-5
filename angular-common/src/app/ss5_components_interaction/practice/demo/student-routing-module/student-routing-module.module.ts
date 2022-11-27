import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ListStudentComponent} from '../list-student/list-student.component';
import {CreateStudentComponent} from '../create-student/create-student.component';
import {DetailStudentComponent} from '../detail-student/detail-student.component';

const routes: Routes = [
  {path: 'home', component: ListStudentComponent},
  {path: 'create', component: CreateStudentComponent},
  {path: 'detail/:index', component: DetailStudentComponent}
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class StudentRoutingModule {
}
