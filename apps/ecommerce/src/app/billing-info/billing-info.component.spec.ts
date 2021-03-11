import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillingInfoComponent } from './billing-info.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { rootReducer } from '../reducers';
import { RouterTestingModule } from "@angular/router/testing";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ActivatedRoute } from '@angular/router';
import { FacadeService } from '../services/facade.service';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { of } from 'rxjs';

let paramMap = new Map();
paramMap.set('id', '123');

describe('BillingInfoComponent', () => {
  let component: BillingInfoComponent;
  let fixture: ComponentFixture<BillingInfoComponent>;

  beforeEach(async () => {
    const matDialogStub = () => ({ open: (dialogComponent) => ({}) });
    await TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot(rootReducer),
        StoreModule,
        RouterTestingModule,
        BrowserAnimationsModule,
        FormsModule,
        MatDialogModule
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
            getSearhData: () => of([{ id: 123 }]),
            buyRequestSuccessAction: () => of(),
            getCartData: () => of({ id: 123 }),
            cartDeleteSuccessAction: () => of()
          },
        },
        { provide: MatDialog, useFactory: matDialogStub },
      ],
      declarations: [BillingInfoComponent],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BillingInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create id undefined', () => {
    paramMap.set('id', undefined);
    const testForm = <NgForm>{
      value: {
        name: "Nit Mit"
      }
    };
    const matDialogStub: MatDialog = fixture.debugElement.injector.get(
      MatDialog
    );
    spyOn(matDialogStub, 'open').and.callThrough();
    component.submit(testForm);
    expect(matDialogStub.open).toHaveBeenCalled();
  });

  it('should create submit button', () => {
    const testForm = <NgForm>{
      value: {
        name: "Nit Mit"
      }
    };
    TestBed.get(ActivatedRoute).params = {
      snapshot: { paramMap: paramMap }
    }
    const matDialogStub: MatDialog = fixture.debugElement.injector.get(
      MatDialog
    );
    spyOn(matDialogStub, 'open').and.callThrough();
    component.submit(testForm);
    expect(matDialogStub.open).toHaveBeenCalled();
  });
});