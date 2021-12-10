import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { WeatherConfigService } from './weather-config.service';



@Injectable({
  providedIn: 'root'
})
export class GetWeatherService {
  strWeatherBaseURL;
  arrWeatherInfo;
  constructor(private HttpClient: HttpClient,
    public WeatherConfigService: WeatherConfigService) { }

  async GetWeather(WeatherAPI, api, lang, lat, lon) {
    this.strWeatherBaseURL = WeatherAPI + '?appid=' + api + '&lang=' + lang + '&lat=' + lat + '&lon=' + lon + '&units=metric'
    this.arrWeatherInfo = await this.HttpClient.get(this.strWeatherBaseURL)
      .toPromise()
      .then(data => {

        //console.log(data)
        //...
        return data;

      }).catch(function (err) {
        console.log('Error!');
      });
    //console.log(this.arrWeatherInfo);
  }

}
