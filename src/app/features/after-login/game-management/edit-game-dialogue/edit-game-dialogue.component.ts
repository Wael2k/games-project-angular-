import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-game-dialogue',
  templateUrl: './edit-game-dialogue.component.html',
  styleUrls: ['./edit-game-dialogue.component.scss']
})
export class EditGameDialogueComponent implements OnInit {

  gameId: string = '';

  constructor(@Inject(MAT_DIALOG_DATA) private data: string, private dialogRef: MatDialogRef<EditGameDialogueComponent>) { }

  ngOnInit(): void {
    this.gameId = this.data
  }

  receiveAction(isSubmitted: boolean){
    this.dialogRef.close(isSubmitted);
  }
}
