import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home/home.component';
import {ListStudentComponent} from './student/list/list-student.component';
import {CreateStudentComponent} from './student/create/create-student.component';
import {EditStudentComponent} from './student/edit/edit-student.component';

const routes: Routes = [{
  path: '',
  component: HomeComponent
}, {
  path: 'students',
  component: ListStudentComponent
}, {
  path: 'students/create',
  component: CreateStudentComponent
}, {
  path: 'students/edit/:id',
  component: EditStudentComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
