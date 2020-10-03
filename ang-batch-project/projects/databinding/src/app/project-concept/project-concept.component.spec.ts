import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectConceptComponent } from './project-concept.component';

describe('ProjectConceptComponent', () => {
  let component: ProjectConceptComponent;
  let fixture: ComponentFixture<ProjectConceptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectConceptComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectConceptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
