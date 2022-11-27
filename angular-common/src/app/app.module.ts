import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FontSizeEditorComponent} from './ss3_angular_overview/practice/font-size-editor/font-size-editor.component';
import {ShowPetInfoComponent} from './ss3_angular_overview/practice/show-pet-info/show-pet-info.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ProductComponent} from './ss3_angular_overview/practice/product/product.component';
import {CalculatorComponent} from './ss3_angular_overview/exercise/calculator/calculator.component';
import {ColorPickerComponent} from './ss3_angular_overview/exercise/color-picker/color-picker.component';
import {HackerNewComponent} from './ss4_angular_component_directive/practice/hacker-new/hacker-new.component';
import {LikeComponent} from './ss4_angular_component_directive/practice/like/like.component';
import {NavbarComponent} from './ss4_angular_component_directive/practice/navbar/navbar.component';
import {FooterComponent} from './ss4_angular_component_directive/practice/footer/footer.component';
import {ChildComponent} from './ss5_components_interaction/practice/name_card/child/child.component';
import {ParentComponent} from './ss5_components_interaction/practice/name_card/parent/parent.component';
import {Parent2Component} from './ss5_components_interaction/practice/progress_bar_tien_do/parent2/parent2.component';
import {Child2Component} from './ss5_components_interaction/practice/progress_bar_tien_do/child2/child2.component';
import {RatingBarComponent} from './ss5_components_interaction/exercise/rating-bar/rating-bar.component';
import {CountDownComponent} from './ss5_components_interaction/exercise/count-down/count-down.component';
import {DemoComponent} from './ss6_angular_form/practice/demo/demo.component';
import {FormRegisterComponent} from './ss6_angular_form/exercise/form-register/form-register.component';
import {FormLoginComponent} from './ss6_angular_form/exercise/form-login/form-login.component';
import {ListStudentComponent} from './ss5_components_interaction/practice/demo/list-student/list-student.component';
import {CreateStudentComponent} from './ss5_components_interaction/practice/demo/create-student/create-student.component';
import {DetailStudentComponent} from './ss5_components_interaction/practice/demo/detail-student/detail-student.component';
import {StudentRoutingModule} from './ss5_components_interaction/practice/demo/student-routing-module/student-routing-module.module';
import {RouterModule} from '@angular/router';
import {StudentNavbarComponent} from './ss5_components_interaction/practice/demo/navbar/student-navbar/student-navbar.component';
import {YoutubePlaylistComponent} from './ss7_ag_router/practice/bai_hat/youtube-playlist/youtube-playlist.component';
import {YoutubePlayerComponent} from './ss7_ag_router/practice/bai_hat/youtube-player/youtube-player.component';
import {PlaylistRoutingModule} from './ss7_ag_router/practice/bai_hat/playlist-routing.module';
import {ProductCreateComponent} from './ss7_ag_router/practice/san_pham/product-create/product-create.component';
import {ProductListComponent} from './ss7_ag_router/practice/san_pham/product-list/product-list.component';
import {ProductRoutingModule} from './ss7_ag_router/practice/san_pham/product-routing.module';
import { ProductEditComponent } from './ss7_ag_router/practice/san_pham/product-edit/product-edit.component';
import { ProductDeleteComponent } from './ss7_ag_router/practice/san_pham/product-delete/product-delete.component';
import { ProductSs7NavbarComponent } from './ss7_ag_router/practice/san_pham/product-ss7-navbar/product-ss7-navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    FontSizeEditorComponent,
    ShowPetInfoComponent,
    ProductComponent,
    CalculatorComponent,
    ColorPickerComponent,
    HackerNewComponent,
    LikeComponent,
    NavbarComponent,
    FooterComponent,
    ChildComponent,
    ParentComponent,
    Parent2Component,
    Child2Component,
    RatingBarComponent,
    CountDownComponent,
    DemoComponent,
    FormRegisterComponent,
    FormLoginComponent,
    ListStudentComponent,
    CreateStudentComponent,
    DetailStudentComponent,
    StudentNavbarComponent,
    YoutubePlaylistComponent,
    YoutubePlayerComponent,
    ProductCreateComponent,
    ProductListComponent,
    ProductEditComponent,
    ProductDeleteComponent,
    ProductSs7NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    StudentRoutingModule,
    PlaylistRoutingModule,
    RouterModule,
    ProductRoutingModule
  ],
  providers: [],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
