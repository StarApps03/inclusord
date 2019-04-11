import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppAdministratorComponent } from './app-administrator.component';

describe('AppAdministratorComponent', () => {
  let component: AppAdministratorComponent;
  let fixture: ComponentFixture<AppAdministratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppAdministratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppAdministratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
