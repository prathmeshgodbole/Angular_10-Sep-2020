import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FirstComponentComponent } from './first-component/first-component.component';
import { InlineComponent } from './inline/inline.component';
import { WebNavComponent } from './web-nav/web-nav.component';
import { WebInfoComponent } from './web-info/web-info.component';
import { WebFullComponent } from './web-full/web-full.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    InlineComponent,
    WebNavComponent,
    WebInfoComponent,
    WebFullComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
