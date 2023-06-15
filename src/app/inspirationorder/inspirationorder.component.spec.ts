import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InspirationorderComponent } from './inspirationorder.component';

describe('InspirationorderComponent', () => {
  let component: InspirationorderComponent;
  let fixture: ComponentFixture<InspirationorderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InspirationorderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InspirationorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
