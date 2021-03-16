import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable, Subscription } from 'rxjs';
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
  subscription: Subscription;
  subscription1: Subscription;


  constructor(
    private breakpointObserver: BreakpointObserver,
    private facadeService: FacadeService
  ) {
  }

  ngOnInit(): void {
    this.subscription = this.facadeService.getCartData().subscribe((data) => {
      this.noOfCart = data.length;
    });
    this.subscription1 = this.facadeService.getBuyData().subscribe((data) => {
      this.noOfCollection = data.length;
    });
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.subscription1.unsubscribe();
  }
}
