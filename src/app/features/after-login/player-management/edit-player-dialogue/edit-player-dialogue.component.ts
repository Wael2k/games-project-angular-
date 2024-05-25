import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-player-dialogue',
  templateUrl: './edit-player-dialogue.component.html',
  styleUrls: ['./edit-player-dialogue.component.scss']
})
export class EditPlayerDialogueComponent implements OnInit {

  playerId: string = '';

  constructor(@Inject(MAT_DIALOG_DATA) private data: string, private dialogRef: MatDialogRef<EditPlayerDialogueComponent>) { }

  ngOnInit(): void {
    this.playerId = this.data
  }

  receiveAction(isSubmitted: boolean){
    this.dialogRef.close(isSubmitted);
  }

}
