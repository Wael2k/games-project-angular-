import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { PlayerService } from '@core/services/player.service';
import { PeriodicElement } from '../game-management/game-management.component';
import { MatDialog } from '@angular/material/dialog';
import { EditPlayerDialogueComponent } from './edit-player-dialogue/edit-player-dialogue.component';

@Component({
  selector: 'app-player-management',
  templateUrl: './player-management.component.html',
  styleUrls: ['./player-management.component.scss']
})
export class PlayerManagementComponent implements OnInit {

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  dataSource = new MatTableDataSource<PeriodicElement>();
  displayedColumns: string[] = ['name', 'position', 'age'];
  displayedColumnsForAction: string[] = ['name', 'position', 'age', 'action'];
  players : any

  constructor(private playerService: PlayerService, public dialog: MatDialog) { }

  ngOnInit() {
    this.playerService.getAllPlayers().subscribe(response => {
      this.dataSource.data = response;
      this.dataSource.paginator = this.paginator;
      this.players = response;
    })
  }

  rerenderColumnName(gameName: string): string {
    let renderedName = 'Not Reconized'
    switch(gameName) {
      case "name" : {
        renderedName =  "Name";
        break;
      }
      case "position" : {
        renderedName =  "Position";
        break;
      }
      case "age" : {
        renderedName =  "Age";
        break;
      }
    }
    return renderedName
  }

  receiveAction(action: boolean){
    if(action) this.rerender()
  }

  deletePlayer(playerId:string){
    this.playerService.deletePlayer(playerId).subscribe({
      next : () => this.rerender()
    })
  }

  openEditDialog(playerId: string) {
    let dialogRef = this.dialog.open(EditPlayerDialogueComponent, {
      width: '375px',
      data : playerId
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result) this.rerender()
    });
  }

  rerender(){
    this.playerService.getAllPlayers().subscribe(response => {
      this.dataSource.data = response;
      this.dataSource.paginator = this.paginator;
      this.players = response;

    })
  }
}
