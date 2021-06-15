import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCoursierComponent } from './list-coursier.component';

describe('ListCoursierComponent', () => {
  let component: ListCoursierComponent;
  let fixture: ComponentFixture<ListCoursierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListCoursierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCoursierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
