import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AboutusComponent } from './aboutus/aboutus.component';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      // Original configuration
      { path: 'products', component: ProductsListComponent },
      { path: 'cart', component: ShoppingCartComponent },
      { path: 'aboutus', component: AboutusComponent },
      { path: 'products-list', redirectTo: '/products', pathMatch: 'full' },
      { path: 'prods', redirectTo: '/products', pathMatch: 'full' },
      // First test with empty route
      { path: '', redirectTo: '/products', pathMatch: 'full' },
      //{ path: 'products/:id', redirectTo: '/product', pathMatch: 'prefix' },
      { path: '**', component: PageNotFoundComponent },
    ]),
    FormsModule,
  ],
  declarations: [
    AppComponent,
    ProductsListComponent,
    ShoppingCartComponent,
    PageNotFoundComponent,
    AboutusComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}