import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { URLS } from '../../constants/constants';
import { Observable } from 'rxjs';
import { FacadeService } from '../services/facade.service';

@Component({
  selector: 'prokarma-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(
    private router: Router,
    private facadeService: FacadeService
  ) { }
  data: Observable<[]>;

  ngOnInit(): void {
    this.data = this.facadeService.getCartData();
  }

  buy() {
    this.router.navigate([URLS.BILLING_INFO]);
  }

  removeFromCart(info) {
    this.facadeService.cartRemoveSuccessAction(info);
  }
}
