import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import {FormsModule} from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { StartComponent } from './start/start.component';
import { AboutComponent } from './about/about.component';
import { CAppComponent } from './c-app/c-app.component';
import { OnLineModule } from './on-line/on-line.module';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    RegisterComponent,
    StartComponent,
    AboutComponent,
    CAppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,HttpClientModule,OnLineModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor()
  {

  }
 }
