import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyFirstLibComponent } from './my-first-lib.component';

describe('MyFirstLibComponent', () => {
  let component: MyFirstLibComponent;
  let fixture: ComponentFixture<MyFirstLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyFirstLibComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyFirstLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
