import { Injectable } from '@angular/core';
import { GnewsConfigService } from './gnews-config.service';

@Injectable({
  providedIn: 'root'
})
export class GnewsGetService {
  constructor(public GnewsConfigService: GnewsConfigService) { }
  arrGNews;
  
  async GetNews() {
    //localStorage.removeItem('headlines');
    const NewsGet = fetch(this.GnewsConfigService.strGnewsURL + this.GnewsConfigService.strGNewsHeadlines
       + '?&token=' + this.GnewsConfigService.strGnewsAPI + '&lang=' + this.GnewsConfigService.strGnewsLang
        + '&country=' + this.GnewsConfigService.strGnewsCountry + '&sortby=publishedAt')
      
        .then(response => response.json())
      this.arrGNews = await NewsGet;
      //localStorage.setItem('headlines',JSON.stringify(this.arrGNews))
      //.then(result => console.log(result))
      //.catch(error => console.log('error', error));
    //this.arrGNews = await NewsGet;
    
  }

}
