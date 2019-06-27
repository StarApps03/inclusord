import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainLevelHeadingComponent } from './main-level-heading.component';

describe('MainLevelHeadingComponent', () => {
  let component: MainLevelHeadingComponent;
  let fixture: ComponentFixture<MainLevelHeadingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainLevelHeadingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainLevelHeadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
