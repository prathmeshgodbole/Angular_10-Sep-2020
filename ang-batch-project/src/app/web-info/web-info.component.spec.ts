import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebInfoComponent } from './web-info.component';

describe('WebInfoComponent', () => {
  let component: WebInfoComponent;
  let fixture: ComponentFixture<WebInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WebInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
