import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueryListComponent } from './query-list.component';

describe('QueryListComponent', () => {
  let component: QueryListComponent;
  let fixture: ComponentFixture<QueryListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QueryListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QueryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
