import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreparazioneVerificaComponent } from './preparazione-verifica.component';

describe('PreparazioneVerificaComponent', () => {
  let component: PreparazioneVerificaComponent;
  let fixture: ComponentFixture<PreparazioneVerificaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreparazioneVerificaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreparazioneVerificaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
