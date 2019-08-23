import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { PollContainerComponent } from './poll-container/poll-container.component';
import { PollItemComponent } from './poll-item/poll-item.component';
import { PlaygroundComponent } from './playground/playground.component';
import { TformComponent } from './tform/tform.component';
import { RformComponent } from './rform/rform.component';
import { ROUTES } from './_routes/routes';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    PollContainerComponent,
    PollItemComponent,
    PlaygroundComponent,
    TformComponent,
    RformComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(ROUTES),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
