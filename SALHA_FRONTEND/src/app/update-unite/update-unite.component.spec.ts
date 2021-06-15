import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateUniteComponent } from './update-unite.component';

describe('UpdateUniteComponent', () => {
  let component: UpdateUniteComponent;
  let fixture: ComponentFixture<UpdateUniteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateUniteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateUniteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
