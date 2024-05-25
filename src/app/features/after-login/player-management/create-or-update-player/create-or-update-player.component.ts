import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { PlayerService } from '@core/services/player.service';

@Component({
  selector: 'app-create-or-update-player',
  templateUrl: './create-or-update-player.component.html',
  styleUrls: ['./create-or-update-player.component.scss']
})
export class CreateOrUpdatePlayerComponent implements OnInit {

  @Input() isCreateOrUpdate!: string;
  @Input() playerId!: string;
  @Output() isSubmitted = new EventEmitter<boolean>();
  action! : string

  playerForm = new FormGroup ({
    name: new FormControl('', Validators.required),
    age: new FormControl('', Validators.required),
    position: new FormControl('', Validators.required) 
  });

  constructor(private playerService: PlayerService) { }

  ngOnInit() {
    this.action = this.isCreateOrUpdate === "create" ? "Create Player" : "Update Player"
    this.initFormForUpdate()
  }

  onSubmit(form: any) {
    let payload = this.playerForm.getRawValue()
    switch(this.isCreateOrUpdate){
      case 'create' : {
        this.playerService.createPlayer(payload).subscribe({
          next: () =>{
            form.resetForm()
            this.isSubmitted.emit(true);
          }
        })
        break;
      }
      case 'update' : {
        this.playerService.updatePlayer(payload, this.playerId).subscribe({
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
    if((this.isCreateOrUpdate === 'update') && this.playerId ){
      this.playerService.getPlayer(this.playerId).subscribe({
        next: (data) => {
          this.playerForm.patchValue(data)
        }
      })
    }
  }

}