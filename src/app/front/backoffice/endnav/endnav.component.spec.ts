import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EndnavComponent } from './endnav.component';

describe('EndnavComponent', () => {
  let component: EndnavComponent;
  let fixture: ComponentFixture<EndnavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EndnavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EndnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
