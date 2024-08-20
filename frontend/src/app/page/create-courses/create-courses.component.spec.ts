import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCoursesComponent } from './create-courses.component';

describe('CreateCoursesComponent', () => {
  let component: CreateCoursesComponent;
  let fixture: ComponentFixture<CreateCoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateCoursesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
