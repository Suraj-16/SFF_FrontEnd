import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FarmerserviceService } from 'src/app/farmerservice.service';
import { CropAuctionDetail } from 'src/app/Models/Farmer/CropAuctionDetail';

@Component({
  selector: 'app-sell-request',
  templateUrl: './sell-request.component.html',
  styleUrls: ['./sell-request.component.css']
})
export class SellRequestComponent implements OnInit {

  constructor(private _service: FarmerserviceService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(cropDetails: CropAuctionDetail){
    cropDetails.user_id = 401;
    cropDetails.sold_date = new Date();
    cropDetails.sold_price = 0;
    cropDetails.total_price = 0;
    cropDetails.soil_ph_certificate = "uploded";
    cropDetails.is_sold = false;
    cropDetails.is_approved = true;
    this._service.addCropToAuction(cropDetails).subscribe(data => {
      console.log(data);
      this.router.navigate(["home"]);
    });
  }

}
