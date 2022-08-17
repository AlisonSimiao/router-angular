import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmptyOpportunitiesComponent } from './empty-opportunities.component';

describe('EmptyOpportunitiesComponent', () => {
  let component: EmptyOpportunitiesComponent;
  let fixture: ComponentFixture<EmptyOpportunitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmptyOpportunitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmptyOpportunitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
