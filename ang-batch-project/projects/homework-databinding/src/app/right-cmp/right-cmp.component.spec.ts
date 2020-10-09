import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightCmpComponent } from './right-cmp.component';

describe('RightCmpComponent', () => {
  let component: RightCmpComponent;
  let fixture: ComponentFixture<RightCmpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RightCmpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RightCmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
