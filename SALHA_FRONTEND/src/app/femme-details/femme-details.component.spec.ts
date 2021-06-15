import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FemmeDetailsComponent } from './femme-details.component';

describe('FemmeDetailsComponent', () => {
  let component: FemmeDetailsComponent;
  let fixture: ComponentFixture<FemmeDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FemmeDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FemmeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
