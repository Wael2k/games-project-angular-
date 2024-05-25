import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameManagementComponent } from './game-management/game-management.component';
import { PlayerManagementComponent } from './player-management/player-management.component';



const routes: Routes = [
  { path: 'game', component: GameManagementComponent},
  { path: 'player', component: PlayerManagementComponent},
  { path: '**', redirectTo: 'game', // or 404 module
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AfterLoginRoutingModule {}
