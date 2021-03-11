import { LayoutModule } from '@angular/cdk/layout';
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { SideBarComponent } from './side-bar.component';
import { FacadeService } from '../services/facade.service';
import { of } from 'rxjs';

describe('SideBarComponent', () => {
  let component: SideBarComponent;
  let fixture: ComponentFixture<SideBarComponent>;
  let facadeService: FacadeService

  beforeEach(waitForAsync(() => {
    const mediaMatcherStub = () => ({ matchMedia: (string) => ({}) });
    TestBed.configureTestingModule({
      declarations: [SideBarComponent],
      imports: [
        LayoutModule
      ],
      providers: [
        {
          provide: FacadeService,
          useValue: {
            getCartData: () => of(1),
            getBuyData: () => of(2),
          },
        }
      ],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    facadeService = TestBed.inject(FacadeService);

  });

  beforeAll(() => {
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: jest.fn().mockImplementation(query => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(), // Deprecated
        removeListener: jest.fn(), // Deprecated
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    });
  })

  it('should compile', () => {
    expect(component).toBeTruthy();
  });

  it('should call getCartData and getBuyData to get count',
    waitForAsync(() => {
      jest.spyOn(facadeService, 'getCartData');
      jest.spyOn(facadeService, 'getBuyData');
      component.ngOnInit();
      fixture.detectChanges();
      expect(facadeService.getCartData).toHaveBeenCalled();
      expect(facadeService.getBuyData).toHaveBeenCalled();
    })
  );
});
