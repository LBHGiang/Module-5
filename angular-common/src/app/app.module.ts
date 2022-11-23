import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FontSizeEditorComponent} from './ss3_angular_overview/practice/font-size-editor/font-size-editor.component';
import { ShowPetInfoComponent } from './ss3_angular_overview/practice/show-pet-info/show-pet-info.component';
import {FormsModule} from '@angular/forms';
import { ProductComponent } from './ss3_angular_overview/practice/product/product.component';
import { CalculatorComponent } from './ss3_angular_overview/exercise/calculator/calculator.component';
import { ColorPickerComponent } from './ss3_angular_overview/exercise/color-picker/color-picker.component';
import { HackerNewComponent } from './ss4_angular_component_directive/practice/hacker-new/hacker-new.component';
import { LikeComponent } from './ss4_angular_component_directive/practice/like/like.component';
import { NavbarComponent } from './ss4_angular_component_directive/practice/navbar/navbar.component';
import { FooterComponent } from './ss4_angular_component_directive/practice/footer/footer.component';
import { ListStudentComponent } from './ss5_components_interaction/practice/demo/list-student/list-student.component';
import { CreateStudentComponent } from './ss5_components_interaction/practice/demo/create-student/create-student.component';
import { DetailStudentComponent } from './ss5_components_interaction/practice/demo/detail-student/detail-student.component';
import { ChildComponent } from './ss5_components_interaction/practice/name_card/child/child.component';
import { ParentComponent } from './ss5_components_interaction/practice/name_card/parent/parent.component';
import { Parent2Component } from './ss5_components_interaction/practice/progress_bar_tien_do/parent2/parent2.component';
import { Child2Component } from './ss5_components_interaction/practice/progress_bar_tien_do/child2/child2.component';
import { RatingBarComponent } from './ss5_components_interaction/exercise/rating-bar/rating-bar.component';
import { CountDownComponent } from './ss5_components_interaction/exercise/count-down/count-down.component';




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
    ListStudentComponent,
    CreateStudentComponent,
    DetailStudentComponent,
    ChildComponent,
    ParentComponent,
    Parent2Component,
    Child2Component,
    RatingBarComponent,
    CountDownComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
