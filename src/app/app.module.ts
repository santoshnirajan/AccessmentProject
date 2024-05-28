import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductSearchComponent } from './product-search/product-search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrimengModule } from './shared/primeng.module';
import { HttpClientModule } from '@angular/common/http'
import { ProductService } from './service/product.service';
import { Environment } from './environment/environment.service';
import { CurrencyFormatPipe } from './currency-format.pipe';
import { HighlightDirective } from './highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductDetailComponent,
    ProductEditComponent,
    ProductSearchComponent,
    CurrencyFormatPipe,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    PrimengModule
  ],
  providers: [ProductService, Environment],
  bootstrap: [AppComponent]
})
export class AppModule { }
