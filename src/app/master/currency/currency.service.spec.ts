import { TestBed, fakeAsync } from '@angular/core/testing';

import { CurrencyService } from './currency.service';
import { of } from 'rxjs';

class MockCurrencyService {
  private mockCurrencyList: any[]; 
  constructor() {
    this.mockCurrencyList = [
      {
        id: 1,
        code: 'USD',
        name: 'US Dollar',
        base: true
      },
      {
        id: 2,
        code: 'CAD',
        name: 'Canadian Dollar',
        base: false
      },
      {
        id: 3,
        code: 'INR',
        name: 'Indian Rupees',
        base: false
      }
    ];
  } 
  
  getCurrencies = () => {
    return of(this.mockCurrencyList);
  }

  getCurrency = (currencyId: number) => {
    const currency = this.mockCurrencyList.find((c) => {
      return c.id === currencyId;
    })
    return of(currency);
  }

  createCurrency = (currency: any) => {
    currency.id = 4;
    return of(currency);
  }

  updateCurrency = (currency: any) => {
    return of(currency);
  }

  deleteCurrency = (currencyId: number) => {
    return of(true);
  }
}

fdescribe('CurrencyService', () => {
  beforeEach(() => {
    // https://github.com/angular/angular/issues/10727
    TestBed.configureTestingModule({
      providers: [
        {provide: CurrencyService, useClass: MockCurrencyService}
      ]
    })
  });

  it('should be created', () => {
    const service: CurrencyService = TestBed.get(CurrencyService);
    expect(service).toBeTruthy();
  });

  it('should return all currencies', () => {
    const service: CurrencyService = TestBed.get(CurrencyService);
    service.getCurrencies().subscribe(data => {
      expect(data.length).toEqual(3);
    })
  });

  it('should find and return a currency', () => {
    const currencyId: number = 1;
    const service: CurrencyService = TestBed.get(CurrencyService);
    service.getCurrency(currencyId).subscribe(data => {
      expect(data.length).toEqual(undefined);
      expect(data.code).toEqual('USD');
      expect(data.name).toEqual('US Dollar');
      expect(data.base).toEqual(true);
    })
  });

  it('should create currency', () => {
    const service: CurrencyService = TestBed.get(CurrencyService);
    const currencyData: any = {
      id: null,
      code: 'SR',
      name: 'Srilankan Rupee',
      base: false
    };
    service.createCurrency(currencyData).subscribe(data => {
      expect(data.id).not.toEqual(null);
      expect(data.id).toBeGreaterThan(0);
    });
  });

  it('should update currency', () => {
    const service: CurrencyService = TestBed.get(CurrencyService);
    const currencyData: any = {
      id: 4,
      code: 'SR',
      name: 'Srilankan Rupee updated',
      base: false
    };
    service.updateCurrency(currencyData).subscribe(data => {
      expect(data.name).not.toEqual('Srilankan Rupee');
      expect(data.name).toEqual('Srilankan Rupee updated');
    });
  });

  it('should delete currency', () => {
    const service: CurrencyService = TestBed.get(CurrencyService);
    service.deleteCurrency(4).subscribe(data => {
      expect(data).toEqual(true);
    });
  });
});
