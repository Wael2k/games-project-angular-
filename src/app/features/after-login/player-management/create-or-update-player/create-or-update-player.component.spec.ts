import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateOrUpdatePlayerComponent } from './create-or-update-player.component';

describe('CreateOrUpdatePlayerComponent', () => {
  let component: CreateOrUpdatePlayerComponent;
  let fixture: ComponentFixture<CreateOrUpdatePlayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateOrUpdatePlayerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateOrUpdatePlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
