import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { TreeModule } from 'angular-tree-component'; // module
import { AppComponent } from './app.component';
import {InputTextareaModule} from 'primeng/primeng';
import {Autosize} from 'angular2-autosize/src/autosize.directive';

@NgModule({
  declarations: [
    AppComponent,
    Autosize
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    TreeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
