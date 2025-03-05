import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PonyButtonComponent } from './pony-button.component';

describe('PonyButtonComponent', () => {
  let component: PonyButtonComponent;
  let fixture: ComponentFixture<PonyButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PonyButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PonyButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
