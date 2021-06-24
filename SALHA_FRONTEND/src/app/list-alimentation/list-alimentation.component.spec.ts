import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAlimentationComponent } from './list-alimentation.component';

describe('ListAlimentationComponent', () => {
  let component: ListAlimentationComponent;
  let fixture: ComponentFixture<ListAlimentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAlimentationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAlimentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
