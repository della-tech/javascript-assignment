import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComparexyComponent } from './comparexy.component';

describe('ComparexyComponent', () => {
  let component: ComparexyComponent;
  let fixture: ComponentFixture<ComparexyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComparexyComponent]
    });
    fixture = TestBed.createComponent(ComparexyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
