import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbecedaryComponent } from './abecedary.component';

describe('AbecedaryComponent', () => {
  let component: AbecedaryComponent;
  let fixture: ComponentFixture<AbecedaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbecedaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbecedaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
