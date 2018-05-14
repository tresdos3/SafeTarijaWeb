import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalizarpComponent } from './localizarp.component';

describe('LocalizarpComponent', () => {
  let component: LocalizarpComponent;
  let fixture: ComponentFixture<LocalizarpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocalizarpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalizarpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
