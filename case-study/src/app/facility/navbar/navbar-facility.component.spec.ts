import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarFacilityComponent } from './navbar-facility.component';

describe('NavbarFacilityComponent', () => {
  let component: NavbarFacilityComponent;
  let fixture: ComponentFixture<NavbarFacilityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarFacilityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarFacilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
