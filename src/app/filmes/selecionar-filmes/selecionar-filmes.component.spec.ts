import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelecionarFilmesComponent } from './selecionar-filmes.component';

describe('SelecionarFilmesComponent', () => {
  let component: SelecionarFilmesComponent;
  let fixture: ComponentFixture<SelecionarFilmesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelecionarFilmesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelecionarFilmesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
