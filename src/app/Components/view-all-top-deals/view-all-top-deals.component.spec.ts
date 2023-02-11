import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllTopDealsComponent } from './view-all-top-deals.component';

describe('ViewAllTopDealsComponent', () => {
  let component: ViewAllTopDealsComponent;
  let fixture: ComponentFixture<ViewAllTopDealsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAllTopDealsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewAllTopDealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
