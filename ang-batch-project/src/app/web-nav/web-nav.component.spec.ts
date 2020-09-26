import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebNavComponent } from './web-nav.component';

describe('WebNavComponent', () => {
  let component: WebNavComponent;
  let fixture: ComponentFixture<WebNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WebNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
