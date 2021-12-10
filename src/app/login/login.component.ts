import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ViewEncapsulation } from '@angular/core';
import { OktaWidgetService } from 'app/shared/okta/okta-widget.service';
import { OktaSDKAuthService } from '../shared/okta/okta-auth.service';
import { OktaAuth} from '@okta/okta-auth-js'
import { MatSnackBar } from '@angular/material/snack-bar';
import { OktaConfigService } from "app/shared/okta/okta-config.service";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {
  private authService = new OktaAuth(this.OktaSDKAuthService.config);
  strUserSession;
  constructor(private OktaWidgetService: OktaWidgetService, private OktaSDKAuthService: OktaSDKAuthService, private _snackBar: MatSnackBar, public OktaConfigService:OktaConfigService,) { }

  async ngOnInit()  {
    this.OktaWidgetService.CloseWidget();
    
    this.strUserSession = await this.authService.session.exists()
      .then(function (exists) {
        if (exists) {
          // logged in
          console.log('Session to Okta : ' + exists);
          return exists
        } else {
          // not logged in
          console.log('Session to Okta : ' + exists);
          return exists
        }
      });
    switch (this.strUserSession) {
      case false:
        this.OktaWidgetService.login();
        break;

      case true:
        window.location.replace(this.OktaSDKAuthService.config.redirectUri);
        break;

    }
  }

}
