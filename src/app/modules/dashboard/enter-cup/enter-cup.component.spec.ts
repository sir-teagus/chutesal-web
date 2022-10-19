/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EnterCupComponent } from './enter-cup.component';

describe('EnterCupComponent', () => {
  let component: EnterCupComponent;
  let fixture: ComponentFixture<EnterCupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnterCupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnterCupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
