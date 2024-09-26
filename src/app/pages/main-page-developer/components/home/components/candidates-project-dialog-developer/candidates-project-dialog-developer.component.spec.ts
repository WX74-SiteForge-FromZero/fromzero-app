import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatesProjectDialogDeveloperComponent } from './candidates-project-dialog-developer.component';

describe('CandidatesProjectDialogDeveloperComponent', () => {
  let component: CandidatesProjectDialogDeveloperComponent;
  let fixture: ComponentFixture<CandidatesProjectDialogDeveloperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CandidatesProjectDialogDeveloperComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CandidatesProjectDialogDeveloperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
