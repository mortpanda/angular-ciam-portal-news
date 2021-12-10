import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SampleGnewsConfigService {

  constructor() { }

  // Your API information from https://gnews.io
  strGnewsURL = 'https://gnews.io/api/v4/';
  strGNewsHeadlines = 'top-headlines'
  strGnewsAPI = 'API Key';
  strGnewsCountry = 'Country';
  strGnewsLang = 'Language';
  
}
