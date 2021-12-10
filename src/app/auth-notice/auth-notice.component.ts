import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-auth-notice',
  templateUrl: './auth-notice.component.html',
  styleUrls: ['./auth-notice.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AuthNoticeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
