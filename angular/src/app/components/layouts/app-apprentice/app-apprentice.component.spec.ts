import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppApprenticeComponent } from './app-apprentice.component';

describe('AppApprenticeComponent', () => {
  let component: AppApprenticeComponent;
  let fixture: ComponentFixture<AppApprenticeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppApprenticeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppApprenticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
