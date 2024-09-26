import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectRepositoryCardComponent } from './project-repository-card.component';

describe('ProjectRepositoryCardComponent', () => {
  let component: ProjectRepositoryCardComponent;
  let fixture: ComponentFixture<ProjectRepositoryCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProjectRepositoryCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProjectRepositoryCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
