import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PollItemComponent } from './poll-item.component';

describe('PollItemComponent', () => {
  let component: PollItemComponent;
  let fixture: ComponentFixture<PollItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PollItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PollItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
