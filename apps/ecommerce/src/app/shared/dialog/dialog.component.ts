import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'dialogContentDialog',
  templateUrl: './dialog.html',
})
export class DialogComponent implements OnInit {
  data: any;
  constructor(@Inject(MAT_DIALOG_DATA) data) {
    this.data = data;
   }

  ngOnInit(): void {
  }
}