import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPlayerDialogueComponent } from './edit-player-dialogue.component';

describe('EditPlayerDialogueComponent', () => {
  let component: EditPlayerDialogueComponent;
  let fixture: ComponentFixture<EditPlayerDialogueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditPlayerDialogueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditPlayerDialogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
