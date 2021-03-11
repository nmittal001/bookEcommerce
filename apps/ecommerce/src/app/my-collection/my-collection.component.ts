import { Component, OnInit } from '@angular/core';
import { FacadeService } from '../services/facade.service';

@Component({
  selector: 'prokarma-my-collection',
  templateUrl: './my-collection.component.html',
  styleUrls: ['./my-collection.component.scss']
})
export class MyCollectionComponent implements OnInit {

  constructor(
    private facadeService: FacadeService
  ) { }

  mycollectionData = [];

  ngOnInit(): void {
    this.facadeService.getBuyData().subscribe((data) => {
      this.mycollectionData = data;
    });
  }
}
