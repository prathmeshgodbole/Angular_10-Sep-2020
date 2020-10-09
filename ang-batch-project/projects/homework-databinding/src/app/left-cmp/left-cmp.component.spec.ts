import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftCmpComponent } from './left-cmp.component';

describe('LeftCmpComponent', () => {
  let component: LeftCmpComponent;
  let fixture: ComponentFixture<LeftCmpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeftCmpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftCmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
