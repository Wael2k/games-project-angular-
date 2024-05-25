import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';

import { AfterLoginRoutingModule } from './after-login-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { GameManagementComponent } from './game-management/game-management.component';
import { CreateOrUpdateGameComponent } from './game-management/create-or-update-game/create-or-update-game.component';
import { PlayerManagementComponent } from './player-management/player-management.component';
import { CreateOrUpdatePlayerComponent } from './player-management/create-or-update-player/create-or-update-player.component';
import { MaterialModule } from 'src/app/angular-material.module';
import { EditPlayerDialogueComponent } from './player-management/edit-player-dialogue/edit-player-dialogue.component';
import { EditGameDialogueComponent } from './game-management/edit-game-dialogue/edit-game-dialogue.component';

@NgModule({
  declarations: [ CreateOrUpdateGameComponent, PlayerManagementComponent, CreateOrUpdatePlayerComponent, GameManagementComponent, GameManagementComponent, CreateOrUpdateGameComponent, PlayerManagementComponent, CreateOrUpdatePlayerComponent, EditPlayerDialogueComponent, EditGameDialogueComponent],
  imports: [CommonModule, AfterLoginRoutingModule, SharedModule, ReactiveFormsModule, MaterialModule]
})
export class AfterLoginModule {}
