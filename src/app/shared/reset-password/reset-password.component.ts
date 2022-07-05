import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { AngularModalComponent } from 'src/app/modals/angular-modal/angular-modal.component';
@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  hide = true;
  hide1 = true;


  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(AngularModalComponent);
  }

  ngOnInit(): void {
  }

}
