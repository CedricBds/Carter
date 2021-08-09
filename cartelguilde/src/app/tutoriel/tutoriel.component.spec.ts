import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorielComponent } from './tutoriel.component';

describe('TutorielComponent', () => {
  let component: TutorielComponent;
  let fixture: ComponentFixture<TutorielComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TutorielComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TutorielComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
