import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventTestComponent } from './event-test.component';

describe('EventTestComponent', () => {
  let component: EventTestComponent;
  let fixture: ComponentFixture<EventTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventTestComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EventTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
