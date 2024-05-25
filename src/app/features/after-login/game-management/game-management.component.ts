import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { GameService } from '@core/services/game.service';
import { EditGameDialogueComponent } from './edit-game-dialogue/edit-game-dialogue.component';
import { PlayerService } from '@core/services/player.service';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-game-management',
  templateUrl: './game-management.component.html',
  styleUrls: ['./game-management.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('hide', style({height: '0', minHeight: '0'})),
      state('show', style({height: '*'})),
      transition('show => hide', animate('225ms ease-out')),
      transition('hide => show', animate('225ms ease-in'))
    ]),
  ],
})
export class GameManagementComponent implements OnInit {

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  dataSource = new MatTableDataSource<PeriodicElement>();
  displayedColumns: string[] = ['nomGame', 'description', 'nbrJoueurs','score'];
  displayedColumnsForAction: string[] = ['nomGame', 'description', 'nbrJoueurs','score', 'action'];
  games:any

  expandedElement!: PeriodicElement | null;

  constructor(private gameService: GameService, public dialog: MatDialog) { }

  ngOnInit() {
    this.gameService.getAllGames().subscribe(response => {
      this.dataSource.data = response;
      this.dataSource.paginator = this.paginator;
      this.games = response;
    })
  
  }

  rerenderColumnName(gameName: string): string {
    let renderedName = 'Not Reconized'
    switch(gameName) {
      case "nomGame" : {
        renderedName =  "Game Name";
        break;
      }
      case "description" : {
        renderedName =  "Description";
        break;
      }
      case "nbrJoueurs" : {
        renderedName =  "Number Of Players";
        break;
      }
      case "score" : {
        renderedName =  "Score";
        break;
      }

    }
    return renderedName
  }

  receiveAction(action: boolean){
    if(action) this.rerender()
  }

  deletePlayer(playerId:string){
    this.gameService.deleteGame(playerId).subscribe({
      next : () => {
        this.rerender()
      }
    })
  }

  openEditDialog(gameId: string) {
    let dialogRef = this.dialog.open(EditGameDialogueComponent, {
      width: '375px',
      data : gameId
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result) this.rerender()
    });
  }

  rerender(){
    this.gameService.getAllGames().subscribe(response => {
      this.dataSource.data = response;
      this.dataSource.paginator = this.paginator;
      this.games = response;

    })
  }

}