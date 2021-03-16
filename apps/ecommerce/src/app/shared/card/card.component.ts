import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { URLS } from 'apps/ecommerce/src/constants/constants';
import { FacadeService } from '../../services/facade.service';

@Component({
  selector: 'commonCard',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() data: any;
  @Input() error: any;
  @Input() search: any;
  constructor(
    private router: Router,
    private facadeService: FacadeService
  ) { }

  ngOnInit(): void {
  }

  onCardClick(info) {
    this.router.navigate([URLS.SEARCH, info.id]);
  };

  removeFromCart(info) {
    this.facadeService.cartRemoveSuccessAction(info);
  }

  buy() {
    this.router.navigate([URLS.BILLING_INFO]);
  }
}
