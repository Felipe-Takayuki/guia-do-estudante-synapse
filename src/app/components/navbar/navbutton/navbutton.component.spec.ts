import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbuttonComponent } from './navbutton.component';

describe('NavbuttonComponent', () => {
  let component: NavbuttonComponent;
  let fixture: ComponentFixture<NavbuttonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbuttonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
