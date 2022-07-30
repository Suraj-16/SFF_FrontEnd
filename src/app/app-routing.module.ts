import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { ContactUsComponent } from './Components/contact-us/contact-us.component';
import { MarketplaceComponent } from './Components/Farmer/marketplace/marketplace.component';
import { SellRequestComponent } from './Components/Farmer/sell-request/sell-request.component';
import { SoldHistoryComponent } from './Components/Farmer/sold-history/sold-history.component';
import { HomeComponent } from './Components/home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path:'home', component: HomeComponent},
  {path:'aboutus', component: AboutUsComponent},
  {path:'contactus', component: ContactUsComponent},
  {path: 'soldhistory', component: SoldHistoryComponent},
  {path: 'sellrequest', component: SellRequestComponent},
  {path: 'marketplace', component: MarketplaceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
