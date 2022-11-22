import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarContractComponent } from './navbar-contract.component';

describe('NavbarComponent', () => {
  let component: NavbarContractComponent;
  let fixture: ComponentFixture<NavbarContractComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarContractComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarContractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
