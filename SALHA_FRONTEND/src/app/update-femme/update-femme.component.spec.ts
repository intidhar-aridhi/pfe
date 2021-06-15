import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateFemmeComponent } from './update-femme.component';

describe('UpdateFemmeComponent', () => {
  let component: UpdateFemmeComponent;
  let fixture: ComponentFixture<UpdateFemmeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateFemmeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateFemmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
