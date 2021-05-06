import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home/home.component';
import { GenresComponent } from './pages/genres/genres/genres.component';
import { CardComponent } from './components/card/card/card.component';
import { NavbarComponent } from './components/navbar/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GenresComponent,
    CardComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
