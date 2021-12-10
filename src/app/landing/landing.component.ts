import { Component, OnInit } from '@angular/core';
import { GetGeolocationService } from 'app/shared/geolocation/get-geolocation.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor(public GetGeolocationService: GetGeolocationService) { }

  async ngOnInit() {
    await this.GetGeolocationService.GetGeo();
  }

}
