import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CAppComponent } from './c-app.component';

describe('CAppComponent', () => {
  let component: CAppComponent;
  let fixture: ComponentFixture<CAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
