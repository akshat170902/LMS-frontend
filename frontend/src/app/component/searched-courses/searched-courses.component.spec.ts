import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchedCoursesComponent } from './searched-courses.component';

describe('SearchedCoursesComponent', () => {
  let component: SearchedCoursesComponent;
  let fixture: ComponentFixture<SearchedCoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchedCoursesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchedCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
