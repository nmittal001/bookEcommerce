import { Component, OnInit } from '@angular/core';
import { FacadeService } from '../services/facade.service';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { URLS } from '../../constants/constants';
import { MatDialog } from '@angular/material/dialog';
import * as sharedModule from '../shared';
import { SearchDataInterface } from '../models/searchData';

@Component({
  selector: 'prokarma-billing-info',
  templateUrl: './billing-info.component.html',
  styleUrls: ['./billing-info.component.scss']
})
export class BillingInfoComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public dialog: MatDialog,
    private facadeService: FacadeService
  ) { }

  cartData: Observable<[SearchDataInterface]>;
  id: any;
  buyItems: any;

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
  }
  
  submit(form: NgForm) {
    if (this.id != undefined) {
      this.facadeService.getSearhData().forEach(data => {
        this.buyItems = data.filter((item) => item.id == this.id);
      });
    } else {
      this.cartData = this.facadeService.getCartData();
      this.cartData.pipe(take(1)).subscribe(value => {
        this.buyItems = value;
      });
      this.facadeService.cartDeleteSuccessAction();
    }
    this.facadeService.buyRequestSuccessAction(this.buyItems, form);

    this.dialog.open(sharedModule.DialogComponent, {
      data: {
        title: 'Hello',
        content: 'Ordered Successfully.'
      }
    });
    this.router.navigate([URLS.MY_COLLECTION]);
  }
}