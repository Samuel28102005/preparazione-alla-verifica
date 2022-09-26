import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreparazioneComponent } from './preparazione.component';

describe('PreparazioneComponent', () => {
  let component: PreparazioneComponent;
  let fixture: ComponentFixture<PreparazioneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreparazioneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreparazioneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
