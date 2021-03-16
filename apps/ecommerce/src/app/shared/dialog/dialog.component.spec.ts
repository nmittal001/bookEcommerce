import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { DialogComponent } from './dialog.component';
import { MatDialogModule, MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

describe('DialogComponent', () => {
  let component: DialogComponent;
  let fixture: ComponentFixture<DialogComponent>;

  beforeEach(() => {
    const matDialogStub = () => ({ open: (dialogComponent) => ({}) });
    TestBed.configureTestingModule({
      imports: [
        MatDialogModule
      ],
      providers: [
        { provide: MatDialog, useFactory: matDialogStub },
        { provide: MAT_DIALOG_DATA, useValue: {} },
      ],
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [DialogComponent]
    });
    fixture = TestBed.createComponent(DialogComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });
});
