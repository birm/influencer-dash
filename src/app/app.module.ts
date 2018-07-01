import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AuthboardComponent } from './authboard/authboard.component';
import { ModelComponent } from './model/model.component';
import { SelectionComponent } from './selection/selection.component';
import { OutputComponent } from './output/output.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthboardComponent,
    ModelComponent,
    SelectionComponent,
    OutputComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
