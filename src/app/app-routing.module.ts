import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BeveragesComponent } from './beverages/beverages.component';
import { HomeComponent } from './home/home.component';
import { ContactsComponent } from './contacts/contacts.component';
import { EggsComponent } from './eggs/eggs.component';
import { FoodgrainsComponent } from './foodgrains/foodgrains.component';
import { FruitsComponent } from './fruits/fruits.component';
import { SnacksComponent } from './snacks/snacks.component';

const routes: Routes = [
  { path: 'beverages', component: BeveragesComponent },
  { path: '', component: HomeComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: 'eggs', component: EggsComponent },
  { path: 'foodgrains', component: FoodgrainsComponent },
  { path: 'fruits', component: FruitsComponent },
  { path: 'snacks', component: SnacksComponent },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
