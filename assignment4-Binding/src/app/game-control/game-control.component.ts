import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  isGameEnabled: boolean = false;
  numbre: number = 0;
  @Output('gameNumber')numbreEvent =  new EventEmitter<{numbre: number, kind: string}>();
  myTimer;

  constructor() { }

  ngOnInit() {
  }

  onStartGame() {
    this.isGameEnabled = true;
    this.myTimer = setInterval(
      () =>this.doIncrementNumber(),
        1000);
  }

  onStopGame() {
    this.isGameEnabled = false;
    clearInterval(this.myTimer);
  }

  doIncrementNumber(){

    this.numbre = this.numbre+1;

    this.numbreEvent.emit({
      numbre: this.numbre,
      kind: this.numbre % 2 === 0 ? 'even' : 'odd'
    });
  }
}
