import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { OktaSDKAuthService } from 'app/shared/okta/okta-auth.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { MatDividerModule } from '@angular/material/divider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog'; 
import { MatFormFieldModule } from '@angular/material/form-field'; 
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatSnackBarModule} from '@angular/material/snack-bar'; 
import { Router, Routes } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import {A11yModule} from '@angular/cdk/a11y';
import {MatChipsModule} from '@angular/material/chips'; 
import {MatAutocompleteModule} from '@angular/material/autocomplete'; 
import {MatCheckboxModule} from '@angular/material/checkbox';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import {MatTabsModule} from '@angular/material/tabs';
import {MatListModule} from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {LandingComponent} from 'app/landing/landing.component';
import {FooterComponent} from 'app/shared/footer/footer.component';
import { LoginComponent } from 'app/login/login.component';
import { SamplePageComponent } from './sample-page/sample-page.component';
//import { AuthNoticeComponent } from './auth-notice/auth-notice.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AuthNoticeComponent } from './auth-notice/auth-notice.component';
import { NewsFeedComponent } from './news-feed/news-feed.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    LandingComponent,
    LoginComponent,
    SamplePageComponent,
    AuthNoticeComponent,
    NewsFeedComponent,
    //AuthNoticeComponent,
   
    
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatToolbarModule,
    MatCardModule,
    MatMenuModule, 
    MatTableModule,
    MatDividerModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatOptionModule,
    MatProgressSpinnerModule,
    HttpClientModule,
    MatDialogModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    CommonModule,
    A11yModule,
    FlexLayoutModule,
    MatChipsModule,
    MatAutocompleteModule,
    MatCheckboxModule,
    MatSnackBarModule,
    MatListModule,
    MatExpansionModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatProgressBarModule,
    
    
    
  ],
  providers: [
    OktaSDKAuthService,    
    
  ], 

  
  bootstrap: [AppComponent]
})
export class AppModule { }
