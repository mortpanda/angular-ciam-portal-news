import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { OktaSDKAuthService } from '../shared/okta/okta-auth.service';
import { OktaAuth } from '@okta/okta-auth-js'
import { MatSnackBar } from '@angular/material/snack-bar';
import { OktaConfigService } from "app/shared/okta/okta-config.service";
import { OktaGetTokenService } from 'app/shared/okta/okta-get-token.service';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AuthNoticeComponent } from 'app/auth-notice/auth-notice.component';

@Component({
  selector: 'app-sample-page',
  templateUrl: './sample-page.component.html',
  styleUrls: ['./sample-page.component.css']
})
export class SamplePageComponent implements OnInit {
  strThisSession;
  strUserSession: Boolean;
  public authService = new OktaAuth(this.OktaSDKAuthService.config);
  durationInSeconds = 5;

  constructor(public OktaGetTokenService: OktaGetTokenService,
    public OktaSDKAuthService: OktaSDKAuthService,
    public _snackBar: MatSnackBar
  ) { }

  NotAuthed() {
    this._snackBar.openFromComponent(AuthNoticeComponent,
      {
        duration: this.durationInSeconds * 1000,
        horizontalPosition: 'center',

      });
  }


  async ngOnInit() {

    this.authService.token.getUserInfo()
      .then(function (user) {
        //console.log(user)
      })
    this.strUserSession = await this.authService.session.exists()
      .then(function (exists) {
        if (exists) {
          // logged in
          return exists
        } else {
          // not logged in
          return exists
        }
      });
    switch (this.strUserSession == true) {
      case false:
        //alert(this.oktaSDKAuth.config.redirectUri)
        // alert('ログインしてください')
        await this.NotAuthed();
        await window.location.replace('/');
      case true:
        this.OktaGetTokenService.GetAccessToken();
        break;

    }

  }

}
