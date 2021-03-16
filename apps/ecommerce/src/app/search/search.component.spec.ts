import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchComponent } from './search.component';
import { StoreModule } from '@ngrx/store';
import { rootReducer } from '../reducers';
import { RouterTestingModule } from "@angular/router/testing";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { URLS } from '../../constants/constants';
import { HttpClientService } from "../services/http-client.service";
import { of } from 'rxjs';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;
  let router = {
    navigate: jasmine.createSpy('navigate')
  }

  beforeEach(async () => {
    const matDialogStub = () => ({ open: (dialogComponent) => ({}) });
    await TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot(rootReducer),
        RouterTestingModule,
        BrowserAnimationsModule,
        FormsModule,
        HttpClientTestingModule,
        MatDialogModule
      ],
      providers: [
        { provide: Router, useValue: router },
        { provide: MatDialog, useFactory: matDialogStub },
        {
          provide: HttpClientService,
          useValue: {
            get: () => of([{ id: 123 }])
          },
        },
      ],
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [SearchComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create onCardClick', () => {
    jest.spyOn(component, 'onCardClick');
    component.onCardClick({ id: 'cdsHJMkccd' });
    expect(component.onCardClick).toHaveBeenCalled();
    expect(router.navigate).toHaveBeenCalledWith([URLS.SEARCH, 'cdsHJMkccd']);
  });

  it('should create onSearchClick', () => {
    const testForm = <NgForm>{
      value: {
        name: "angular.js"
      }
    };
    jest.spyOn(component, 'onSearchClick');
    component.onSearchClick(testForm);
    expect(component.onSearchClick).toHaveBeenCalled();
  });
});
