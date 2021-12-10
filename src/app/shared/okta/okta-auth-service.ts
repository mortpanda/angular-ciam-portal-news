import { Injectable } from '@angular/core';
import { OktaAuth } from "@okta/okta-auth-js";
import {OktaConfigService} from 'app/shared/okta/okta-config.service';


@Injectable({
  providedIn: 'root'
})
export class OktaSDKAuthService {
  constructor(private OktaConfig: OktaConfigService  ){ }

    config = {
        clientId: this.OktaConfig.strClientID,
        issuer: this.OktaConfig.strIssuer,
        redirectUri: this.OktaConfig.strRedirectURL,
        postLogoutRedirectUri:this.OktaConfig.strPostLogoutURL,
        responseMode: this.OktaConfig.strResponseMode,
        responseType: this.OktaConfig.strResponseType,
        scopes: this.OktaConfig.strScope,
        prompt: this.OktaConfig.strPrompt,

    };

    OktaSDKAuthClient = new OktaAuth(this.config);    

    
  }
  