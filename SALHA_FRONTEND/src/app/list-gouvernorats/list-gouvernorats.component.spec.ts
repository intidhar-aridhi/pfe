import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListGouvernoratsComponent } from './list-gouvernorats.component';

describe('ListGouvernoratsComponent', () => {
  let component: ListGouvernoratsComponent;
  let fixture: ComponentFixture<ListGouvernoratsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListGouvernoratsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListGouvernoratsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
