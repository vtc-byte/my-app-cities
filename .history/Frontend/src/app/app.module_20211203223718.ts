import { PropertyDetailComponent } from './property/property-detail/property-detail.component';
import { HousingService } from './../services/housing.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';
import { PropertyCardComponent } from './property/property-card/property-card.component';
import { PropertyListComponent } from './property/property-list/property-list.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AddPropertyComponent } from './property/add-property/add-property.component';
import { RouterModule, Routes } from '@angular/router';


const appRoutes: Routes = [
  {
    path: '',
    component: PropertyListComponent
  },
  {
    path: 'add-property',
    component: AddPropertyComponent
  },
  {
    path: 'rent-property',
    component: PropertyListComponent
  },
  {
    path: 'property-detail/:id',
    component: PropertyDetailComponent
  },
]
@NgModule({
  declarations: [
    AppComponent,
    PropertyCardComponent,
    PropertyListComponent,
    NavBarComponent,
    AddPropertyComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [HousingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
