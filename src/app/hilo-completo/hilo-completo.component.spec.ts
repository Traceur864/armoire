import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HiloCompletoComponent } from './hilo-completo.component';

describe('HiloCompletoComponent', () => {
  let component: HiloCompletoComponent;
  let fixture: ComponentFixture<HiloCompletoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HiloCompletoComponent]
    });
    fixture = TestBed.createComponent(HiloCompletoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
