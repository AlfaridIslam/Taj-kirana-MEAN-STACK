import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Navbar/navbar.component';
import { SlidersComponent } from './sliders/sliders.component';
import { Card1Component } from './card1/card1.component';
import { Card2Component } from './card2/card2.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { FruitsComponent } from './fruits/fruits.component';
import { FoodgrainsComponent } from './foodgrains/foodgrains.component';
import { SnacksComponent } from './snacks/snacks.component';
import { BeveragesComponent } from './beverages/beverages.component';
import { EggsComponent } from './eggs/eggs.component';
import { ContactsComponent } from './contacts/contacts.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SlidersComponent,
    Card1Component,
    Card2Component,
    FooterComponent,
    HomeComponent,
    FruitsComponent,
    FoodgrainsComponent,
    SnacksComponent,
    BeveragesComponent,
    EggsComponent,
    ContactsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
