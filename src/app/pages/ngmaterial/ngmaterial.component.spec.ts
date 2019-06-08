import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgmaterialComponent } from './ngmaterial.component';

describe('NgmaterialComponent', () => {
  let component: NgmaterialComponent;
  let fixture: ComponentFixture<NgmaterialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgmaterialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgmaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
