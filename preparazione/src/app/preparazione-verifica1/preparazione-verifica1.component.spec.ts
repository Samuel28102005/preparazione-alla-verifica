import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreparazioneVerifica1Component } from './preparazione-verifica1.component';

describe('PreparazioneVerifica1Component', () => {
  let component: PreparazioneVerifica1Component;
  let fixture: ComponentFixture<PreparazioneVerifica1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreparazioneVerifica1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreparazioneVerifica1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
