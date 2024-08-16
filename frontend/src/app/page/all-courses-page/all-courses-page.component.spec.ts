import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllCoursesPageComponent } from './all-courses-page.component';

describe('AllCoursesPageComponent', () => {
  let component: AllCoursesPageComponent;
  let fixture: ComponentFixture<AllCoursesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllCoursesPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllCoursesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
