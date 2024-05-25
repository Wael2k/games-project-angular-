import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateOrUpdateGameComponent } from './create-or-update-game.component';

describe('CreateOrUpdateGameComponent', () => {
  let component: CreateOrUpdateGameComponent;
  let fixture: ComponentFixture<CreateOrUpdateGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateOrUpdateGameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateOrUpdateGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
