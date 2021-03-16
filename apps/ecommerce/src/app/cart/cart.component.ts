import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { URLS } from '../../constants/constants';
import { Observable } from 'rxjs';
import { FacadeService } from '../services/facade.service';
import { SearchDataInterface } from '../models/searchData';

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
  data: Observable<[SearchDataInterface]>;

  ngOnInit(): void {
    this.data = this.facadeService.getCartData();
  }
}
