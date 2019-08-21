import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { PollContainerComponent } from './poll-container/poll-container.component';
import { PollItemComponent } from './poll-item/poll-item.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    PollContainerComponent,
    PollItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
