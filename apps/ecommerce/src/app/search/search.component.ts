import { Component, OnInit } from '@angular/core';
import { HttpClientService } from "../services/http-client.service";
import { NgForm } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { URLS } from '../../constants/constants';
import { SearchData } from '../models/searchData';
import { FacadeService } from '../services/facade.service';
import * as sharedModule from '../shared';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'prokarma-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  count$: Observable<number>
  data: Observable<SearchData[]>;
  id = '';
  isLoading = false;
  subscription: Subscription;
  error: boolean;
  message = 'Ordered Successfull.';
  constructor(
    private httpClient: HttpClientService,
    private router: Router,
    private facadeService: FacadeService,
    public dialog: MatDialog
  ) {
  }

  ngOnInit(): void {
    this.data = this.facadeService.getSearhData();
    this.facadeService.getSearchFail().subscribe((data) => {
      this.error = data;
      if (data) {
        this.dialog.open(sharedModule.DialogComponent, {
          data: {
            title: 'Hello',
            content: 'Error in fetching data'
          }
        });
      }
    });
  }

  onSearchClick(form: NgForm) {
    this.facadeService.searchRequestAction(form.value.name);
    this.subscription = this.facadeService.getLoading().subscribe((data) => {
      this.isLoading = data;
    });
  }

  ngOnDestroy() {
    if (this.subscription)
      this.subscription.unsubscribe();
  }

  onCardClick(info) {
    this.router.navigate([URLS.SEARCH, info.id]);
  };
}
