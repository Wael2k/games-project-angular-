import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditGameDialogueComponent } from './edit-game-dialogue.component';

describe('EditGameDialogueComponent', () => {
  let component: EditGameDialogueComponent;
  let fixture: ComponentFixture<EditGameDialogueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditGameDialogueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditGameDialogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
