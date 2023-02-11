import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedHomeAdSliderComponent } from './med-home-ad-slider.component';

describe('MedHomeAdSliderComponent', () => {
  let component: MedHomeAdSliderComponent;
  let fixture: ComponentFixture<MedHomeAdSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedHomeAdSliderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedHomeAdSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
