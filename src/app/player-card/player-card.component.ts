import { Component } from '@angular/core';
import { players } from 'src/assets/players';
@Component({
  selector: 'app-player-card',
  templateUrl: './player-card.component.html',
  styleUrls: ['./player-card.component.css']
})
export class PlayerCardComponent {
  players = [...players];
}
