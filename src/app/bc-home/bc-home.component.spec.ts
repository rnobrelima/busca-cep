import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BcHomeComponent } from './bc-home.component';

describe('BcHomeComponent', () => {
  let component: BcHomeComponent;
  let fixture: ComponentFixture<BcHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BcHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BcHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
