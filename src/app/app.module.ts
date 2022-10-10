import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EditShoppingListComponent } from './shopping-list/edit-shopping-list/edit-shopping-list.component';
import { ListComponent } from './recipes/list/list.component';
import { ItemsComponent } from './recipes/list/items/items.component';
import { DetailsComponent } from './recipes/details/details.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipesComponent } from './recipes/recipes.component';

@NgModule({
  declarations: [
    AppComponent,
    EditShoppingListComponent,
    ListComponent,
    ItemsComponent,
    DetailsComponent,
    NavbarComponent,
    ShoppingListComponent,
    RecipesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
