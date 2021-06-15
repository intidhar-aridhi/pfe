import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierCoursierComponent } from './modifier-coursier.component';

describe('ModifierCoursierComponent', () => {
  let component: ModifierCoursierComponent;
  let fixture: ComponentFixture<ModifierCoursierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierCoursierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierCoursierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
