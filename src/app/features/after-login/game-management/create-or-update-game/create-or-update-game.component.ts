import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { GameService } from '@core/services/game.service';
import { PlayerService } from '@core/services/player.service';

@Component({
  selector: 'app-create-or-update-game',
  templateUrl: './create-or-update-game.component.html',
  styleUrls: ['./create-or-update-game.component.scss']
})
export class CreateOrUpdateGameComponent implements OnInit {

  @Input() isCreateOrUpdate!: string;
  @Input() gameId!: string;
  @Output() isSubmitted = new EventEmitter<boolean>();
  action! : string
  players:any
  selectedPlayers:any[] = [];
  
  gameForm = new FormGroup ({
    nomGame: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    score:new FormControl('', Validators.required),
    joueurs: new FormControl(this.selectedPlayers,Validators.required) 
  });

  constructor(private gameService: GameService,private playerService:PlayerService) { }

  ngOnInit() {
    this.playerService.getAllPlayers().subscribe(response => {
      this.players = response;
      console.log("Players",this.players)
     })
  
    this.action = this.isCreateOrUpdate === "create" ? "Create Game" : "Update Game"
    this.initFormForUpdate()
  }

  onSubmit(form: any) {
    let payload = this.gameForm.getRawValue()
    switch(this.isCreateOrUpdate){
      case 'create' : {
        this.gameService.createGame(payload).subscribe({
          next: () =>{
            form.resetForm()
            this.isSubmitted.emit(true);
          }
        })
        break;
      }
      case 'update' : {
        this.gameService.updateGame(payload, this.gameId).subscribe({
          next: () =>{
            form.resetForm()
            this.isSubmitted.emit(true);
          }
        })
        break;
      }
    }
    
  }

  initFormForUpdate(){
    if((this.isCreateOrUpdate === 'update') && this.gameId ){
      this.gameService.getGame(this.gameId).subscribe({
        next: (data) => {
          this.gameForm.patchValue(data)
          this.prepareGameFormForUpdate(data);
        }
      })
    }
  }


  private prepareGameFormForUpdate(data: any) {
    let players: any[] = data.joueurs;
    players.forEach(element => {
      this.selectedPlayers.push(element._id);
    });
    this.gameForm.get('joueurs')?.setValue(this.selectedPlayers);
  }
}
