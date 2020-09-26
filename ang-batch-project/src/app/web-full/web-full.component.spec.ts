import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebFullComponent } from './web-full.component';

describe('WebFullComponent', () => {
  let component: WebFullComponent;
  let fixture: ComponentFixture<WebFullComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebFullComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WebFullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
