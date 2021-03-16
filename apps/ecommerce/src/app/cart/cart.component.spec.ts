import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartComponent } from './cart.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { StoreModule } from '@ngrx/store';
import { rootReducer } from '../reducers';
import { RouterTestingModule } from "@angular/router/testing";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { URLS } from '../../constants/constants';
import { NO_ERRORS_SCHEMA } from '@angular/core';


describe('CartComponent', () => {
  let component: CartComponent;
  let fixture: ComponentFixture<CartComponent>;
  let router = {
    navigate: jasmine.createSpy('navigate')
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        MatSidenavModule,
        MatIconModule,
        MatBadgeModule,
        MatListModule,
        MatToolbarModule,
        MatCardModule,
        StoreModule.forRoot(rootReducer),
        RouterTestingModule,
        BrowserAnimationsModule,
        MatFormFieldModule,
        FormsModule
      ],
      providers: [
        { provide: Router, useValue: router }
      ],
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [CartComponent],

    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
