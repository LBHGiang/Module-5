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




@NgModule({
  declarations: [
    AppComponent,
    FontSizeEditorComponent,
    ShowPetInfoComponent,
    ProductComponent,
    CalculatorComponent,
    ColorPickerComponent,
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
