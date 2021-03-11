import { Component, OnInit } from '@angular/core';
import { HttpClientService } from "../services/http-client.service";
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { URLS } from '../../constants/constants';
import { SearchData } from '../models/searchData';
import { FacadeService } from '../services/facade.service';

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
  constructor(
    private httpClient: HttpClientService,
    private router: Router,
    private facadeService: FacadeService
  ) {
  }

  ngOnInit(): void {
    this.data = this.facadeService.getSearhData();
  }

  onSearchClick(form: NgForm) {
    this.facadeService.searchRequestAction();
    this.httpClient.get(`https://www.googleapis.com/books/v1/volumes?q=${form.value.name}`).subscribe(data => {
      this.facadeService.searchRequestSuccessAction(data);
    });
    this.facadeService.getLoading().subscribe((data) => {
      this.isLoading = data;
    });
  }

  onCardClick(info) {
    this.router.navigate([URLS.SEARCH, info.id]);
  };
}
