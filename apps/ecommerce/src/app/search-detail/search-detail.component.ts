import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { URLS } from '../../constants/constants';
import { FacadeService } from '../services/facade.service'

@Component({
  selector: 'prokarma-search-detail',
  templateUrl: './search-detail.component.html',
  styleUrls: ['./search-detail.component.scss']
})
export class SearchDetailComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private facadeService: FacadeService
  ) { }
  public searchInfo = {};
  public stars = [1, 2, 3, 4, 5];

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    this.facadeService.getSearhData().forEach(data => {
      this.searchInfo = data.filter((item) => item.id == id);
    });
  }

  addToCart() {
    this.facadeService.cartRequestSuccessAction(this.searchInfo);
  }

  buy(info) {
    this.router.navigate([URLS.BILLING_INFO, info.id]);
  }

  showStar(index: number, rating: Number) {
    if (rating >= index) {
      return 'star';
    } else {
      return 'star_border';
    }
  }
}