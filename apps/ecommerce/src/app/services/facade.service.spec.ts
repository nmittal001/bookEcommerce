import { TestBed } from '@angular/core/testing';
import { Store, StoreModule } from '@ngrx/store';
import { rootReducer } from '../reducers';

import { FacadeService } from './facade.service';

describe('FacadeService', () => {
  let service: FacadeService;

  beforeEach(() => {
    const storeStub = () => ({
      select: searchRequestAction => ({}),
      dispatch: arg => ({})
    });
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot(rootReducer),
      ],
      providers: [
        FacadeService,
        { provide: Store, useFactory: storeStub }
      ],
    });
    service = TestBed.inject(FacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('makes expected searchRequestAction calls', () => {
    const storeStub: Store = TestBed.inject(Store);
    spyOn(storeStub, 'dispatch').and.callThrough();
    service.searchRequestAction('query');
    expect(storeStub.dispatch).toHaveBeenCalled();
  });

  it('makes expected getSearhData calls', () => {
    const storeStub: Store = TestBed.inject(Store);
    spyOn(storeStub, 'select').and.callThrough();
    service.getSearhData();
    expect(storeStub.select).toHaveBeenCalled();
  });

  it('makes expected searchRequestSuccessAction calls', () => {
    const storeStub: Store = TestBed.inject(Store);
    spyOn(storeStub, 'dispatch').and.callThrough();
    service.searchRequestSuccessAction({data: {item: []}});
    expect(storeStub.dispatch).toHaveBeenCalled();
  });

  it('makes expected getLoading calls', () => {
    const storeStub: Store = TestBed.inject(Store);
    spyOn(storeStub, 'select').and.callThrough();
    service.getLoading();
    expect(storeStub.select).toHaveBeenCalled();
  });

  it('makes expected cartRequestSuccessAction calls', () => {
    const storeStub: Store = TestBed.inject(Store);
    spyOn(storeStub, 'dispatch').and.callThrough();
    service.cartRequestSuccessAction({data: [] });
    expect(storeStub.dispatch).toHaveBeenCalled();
  });

  it('makes expected getCartData calls', () => {
    const storeStub: Store = TestBed.inject(Store);
    spyOn(storeStub, 'select').and.callThrough();
    service.getCartData();
    expect(storeStub.select).toHaveBeenCalled();
  });

  it('makes expected cartRemoveSuccessAction calls', () => {
    const storeStub: Store = TestBed.inject(Store);
    spyOn(storeStub, 'dispatch').and.callThrough();
    service.cartRemoveSuccessAction({data: []});
    expect(storeStub.dispatch).toHaveBeenCalled();
  });

  it('makes expected cartDeleteSuccessAction calls', () => {
    const storeStub: Store = TestBed.inject(Store);
    spyOn(storeStub, 'dispatch').and.callThrough();
    service.cartDeleteSuccessAction();
    expect(storeStub.dispatch).toHaveBeenCalled();
  });

  it('makes expected getBuyData calls', () => {
    const storeStub: Store = TestBed.inject(Store);
    spyOn(storeStub, 'select').and.callThrough();
    service.getBuyData();
    expect(storeStub.select).toHaveBeenCalled();
  });

  it('makes expected buyRequestSuccessAction calls', () => {
    const storeStub: Store = TestBed.inject(Store);
    spyOn(storeStub, 'dispatch').and.callThrough();
    service.buyRequestSuccessAction([], {value:{ name:'nite', email: 'email', phone: '9706323', address: 'address'}});
    expect(storeStub.dispatch).toHaveBeenCalled();
  });
});
