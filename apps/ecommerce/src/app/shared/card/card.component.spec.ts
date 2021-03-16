import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardComponent } from './card.component';

import { RouterTestingModule } from "@angular/router/testing";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { rootReducer } from '../../reducers';
import { FormsModule } from '@angular/forms';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { URLS } from 'apps/ecommerce/src/constants/constants';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;
  let router = {
    navigate: jasmine.createSpy('navigate')
  }
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot(rootReducer),
        RouterTestingModule,
        BrowserAnimationsModule,
        FormsModule
      ],
      providers: [
        { provide: Router, useValue: router }
      ],
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [ CardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create removeFromCart', () => {
    jest.spyOn(component, 'removeFromCart');
    component.removeFromCart({ id: 'cdsHJMkccd' });
    expect(component.removeFromCart).toHaveBeenCalled();
  });

  it('should create buy', () => {
    component.buy();
    expect(router.navigate).toHaveBeenCalledWith([URLS.BILLING_INFO]);
  });
  
  it('should create onCardClick', () => {
    jest.spyOn(component, 'onCardClick');
    component.onCardClick({ id: 'cdsHJMkccd' });
    expect(component.onCardClick).toHaveBeenCalled();
    expect(router.navigate).toHaveBeenCalledWith([URLS.SEARCH, 'cdsHJMkccd']);
  });
});
