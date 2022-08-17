import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientsComponent } from './pages/clients/clients.component';
import { HeaderComponent } from './components/header/header.component';
import { SearchComponent } from './components/search/search.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { DetailComponent } from './pages/detail/detail.component';
import { HttpClientModule } from "@angular/common/http";
import { EmptyOpportunitiesComponent } from './components/empty-opportunities/empty-opportunities.component';
@NgModule({
  declarations: [
    AppComponent,
    ClientsComponent,
    HeaderComponent,
    SearchComponent,
    DetailComponent,
    EmptyOpportunitiesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NoopAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
