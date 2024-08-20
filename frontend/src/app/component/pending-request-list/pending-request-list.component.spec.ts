import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingRequestListComponent } from './pending-request-list.component';

describe('PendingRequestListComponent', () => {
  let component: PendingRequestListComponent;
  let fixture: ComponentFixture<PendingRequestListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PendingRequestListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PendingRequestListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
