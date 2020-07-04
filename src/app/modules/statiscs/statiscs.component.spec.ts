import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatiscsComponent } from './statiscs.component';

describe('StatiscsComponent', () => {
  let component: StatiscsComponent;
  let fixture: ComponentFixture<StatiscsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatiscsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatiscsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
