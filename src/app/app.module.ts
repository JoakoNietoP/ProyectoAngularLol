import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//routers module
import { AppRoutingModule } from './app.routes'

import { AppComponent } from './app.component';
import { NavComponent } from './components/navbar/navbar.component'
import { HomeComponent } from './components/home/home.component';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    AcercaDeComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
