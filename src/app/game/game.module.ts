import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameRoutingModule } from './game-routing.module';
import { GameComponent } from './game.component';
import { DomHandler } from 'primeng/dom';


@NgModule({
  declarations: [
    GameComponent
  ],
  imports: [
    CommonModule,
    GameRoutingModule,
  ],
  providers: [
    DomHandler
  ]
})
export class GameModule { }
