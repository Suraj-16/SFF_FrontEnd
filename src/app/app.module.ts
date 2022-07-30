import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HomeComponent } from './Components/home/home.component';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { ContactUsComponent } from './Components/contact-us/contact-us.component';
import { SellRequestComponent } from './Components/Farmer/sell-request/sell-request.component';
import { SoldHistoryComponent } from './Components/Farmer/sold-history/sold-history.component';
import { MarketplaceComponent } from './Components/Farmer/marketplace/marketplace.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CropBidsComponent } from './Components/Farmer/crop-bids/crop-bids.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutUsComponent,
    ContactUsComponent,
    SellRequestComponent,
    SoldHistoryComponent,
    MarketplaceComponent,
    CropBidsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
