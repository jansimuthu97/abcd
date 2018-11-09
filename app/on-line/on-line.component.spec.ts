import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnLineComponent } from './on-line.component';

describe('OnLineComponent', () => {
  let component: OnLineComponent;
  let fixture: ComponentFixture<OnLineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnLineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
