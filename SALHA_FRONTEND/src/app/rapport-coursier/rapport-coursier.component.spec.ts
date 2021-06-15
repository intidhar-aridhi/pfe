import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RapportCoursierComponent } from './rapport-coursier.component';

describe('RapportCoursierComponent', () => {
  let component: RapportCoursierComponent;
  let fixture: ComponentFixture<RapportCoursierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RapportCoursierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RapportCoursierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
