import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterEventoComponent } from './register-evento.component';

describe('RegisterEventoComponent', () => {
  let component: RegisterEventoComponent;
  let fixture: ComponentFixture<RegisterEventoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterEventoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterEventoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
