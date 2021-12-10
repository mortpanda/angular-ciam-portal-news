import { Injectable } from '@angular/core';
import { GeolocationService } from '@ng-web-apis/geolocation';
import { Observable, Subject } from 'rxjs';
import { take } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class GetGeolocationService {
arrPosition
  constructor(public geolocation$: GeolocationService) { }

  async GetGeo() {
    //localStorage.removeItem('okta_lat');
    //localStorage.removeItem('okta_long');

    this.geolocation$.pipe(take(1)).subscribe(position => { 
   localStorage.setItem('okta_lat',JSON.stringify(position.coords.latitude));
   localStorage.setItem('okta_long',JSON.stringify(position.coords.longitude));
    }) 
  }  
}
