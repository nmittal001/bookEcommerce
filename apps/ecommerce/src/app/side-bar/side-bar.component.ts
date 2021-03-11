import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { FacadeService } from '../services/facade.service';


@Component({
  selector: 'prokarma-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent {
  public noOfCart = 0;
  public noOfCollection = 0;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private facadeService: FacadeService
  ) {
  }

  ngOnInit(): void {
    this.facadeService.getCartData().subscribe((data) => {
      this.noOfCart = data.length;
    });
    this.facadeService.getBuyData().subscribe((data) => {
      this.noOfCollection = data.length;
    });
  }
}
