/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ChampskillComponent } from './champskill.component';

describe('ChampskillComponent', () => {
  let component: ChampskillComponent;
  let fixture: ComponentFixture<ChampskillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChampskillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChampskillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
