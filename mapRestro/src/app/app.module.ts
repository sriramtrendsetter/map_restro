import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgmCoreModule } from '@agm/core';
import { MapsComponent } from './maps/maps.component';
import { HeaderComponent } from './header/header.component';
import { ResultsComponent } from './results/results.component';

@NgModule({
  declarations: [
    AppComponent,
    MapsComponent,
    HeaderComponent,
    ResultsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 

     AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBOQcBlbuSNv1F9GHCp8BAp6ZfDJoRLjXQ'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
