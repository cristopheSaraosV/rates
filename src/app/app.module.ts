import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BudgetComponent } from './budget/budget.component';
import { HomeComponent } from './home/home.component';
import { BtnBackComponent } from './btn-back/btn-back.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BudgetComponent,
    HomeComponent,
    BtnBackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
