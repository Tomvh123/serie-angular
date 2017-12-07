import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActorStartComponent } from './actor-start.component';

describe('ActorStartComponent', () => {
  let component: ActorStartComponent;
  let fixture: ComponentFixture<ActorStartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActorStartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActorStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
