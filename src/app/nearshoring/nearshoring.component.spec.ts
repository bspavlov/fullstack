import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NearshoringComponent } from './nearshoring.component';

describe('NearshoringComponent', () => {
  let component: NearshoringComponent;
  let fixture: ComponentFixture<NearshoringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NearshoringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NearshoringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
