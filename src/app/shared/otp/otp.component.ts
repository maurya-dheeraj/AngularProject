import { Component, OnInit, ViewChild } from '@angular/core';
import { Config } from 'ng-otp-input/lib/models/config';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css']
})
export class OtpComponent implements OnInit {

  otp!: string;

  comePage!: String;
  showOtpComponent = true;
  email: String = "";
  @ViewChild('ngOtpInput', { static: false }) ngOtpInput: any;
  config: Config = {
    allowNumbersOnly: true,
    length: 4,
    isPasswordInput: false,
    disableAutoFocus: false,
    placeholder: '',
    containerClass: 'otp-verification',
    inputStyles: {
      'width': '43px',
      'height': '43px'
    }
  };
  onOtpChange(otp: string) {
    this.otp = otp;
    console.log(otp);

  }



  
  constructor() { }

  
  ngOnInit(): void {
  }

}
