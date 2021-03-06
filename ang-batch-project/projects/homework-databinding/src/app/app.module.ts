import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LeftCmpComponent } from './left-cmp/left-cmp.component';
import { RightCmpComponent } from './right-cmp/right-cmp.component';
import { NavCmpComponent } from './nav-cmp/nav-cmp.component';

@NgModule({
  declarations: [
    AppComponent,
    LeftCmpComponent,
    RightCmpComponent,
    NavCmpComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
