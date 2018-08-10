import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontentComponent } from './frontent.component';

describe('FrontentComponent', () => {
  let component: FrontentComponent;
  let fixture: ComponentFixture<FrontentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrontentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
