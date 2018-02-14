import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InconnuComponent } from './inconnu.component';

describe('InconnuComponent', () => {
  let component: InconnuComponent;
  let fixture: ComponentFixture<InconnuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InconnuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InconnuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
