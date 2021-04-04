import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ReadComponent } from './read/read.component';
import { AddComponent } from './add/add.component';
import { StoreModule } from '@ngrx/store';
import { reducer } from './reducers/tutorial.reducer';

@NgModule({
  declarations: [
    AppComponent,
    ReadComponent,
    AddComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({
      tutorial : reducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
