/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DatosPeticionService } from './datos-peticion.service';

describe('DatosPeticionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DatosPeticionService]
    });
  });

  it('should ...', inject([DatosPeticionService], (service: DatosPeticionService) => {
    expect(service).toBeTruthy();
  }));
});
