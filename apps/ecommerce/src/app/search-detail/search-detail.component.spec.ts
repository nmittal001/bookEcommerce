import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchDetailComponent } from './search-detail.component';
import { StoreModule } from '@ngrx/store';
import { rootReducer } from '../reducers';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from "@angular/router/testing";
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { FacadeService } from '../services/facade.service';
import { of } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';

const paramMap = new Map();
paramMap.set('id', '123');

describe('SearchDetailComponent', () => {
  let component: SearchDetailComponent;
  let fixture: ComponentFixture<SearchDetailComponent>;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot(rootReducer),
        RouterTestingModule,
        BrowserAnimationsModule,
        HttpClientTestingModule
      ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: { paramMap: paramMap },
          },
        },
        {
          provide: Router,
          useClass: class {
            navigate = jasmine.createSpy('navigate');
          },
        },
        {
          provide: FacadeService,
          useValue: {
            getSearhData: () => of([{
              id: 123,
              volumeInfo: {
                title: 'title',
                subtitle: 'subtitle',
                imageLinks: { thumbnail: 'thumbnail' },
                averageRating: 4,
                publisher: 'publisher',
                pageCount: 'pageCount',
                language: 'language',
                description: 'description',
                authors: ['author1, author2']
              }
            }]),
            cartRequestSuccessAction: () => of()
          },
        },
      ],
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [SearchDetailComponent],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create buy', () => {
    jest.spyOn(component, 'buy');
    component.buy({ id: 'cdsHJMkccd' });
    expect(component.buy).toHaveBeenCalled();
  });

  it('should create showStar', () => {
    jest.spyOn(component, 'showStar');
    component.showStar(5, 5);
    expect(component.showStar).toHaveBeenCalled();
    expect(component.showStar(5, 5)).toBe('star');
  });

  it('should create showStar', () => {
    expect(component.showStar(5, 3)).toBe('star_border');
  });

  it('should create addToCart', () => {
    jest.spyOn(component, 'addToCart');
    component.addToCart();
    expect(component.addToCart).toHaveBeenCalled();
  });
});
