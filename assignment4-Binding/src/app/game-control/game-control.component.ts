import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  isGameEnabled: boolean = false;
  numbre: number = 0;
  type: string;

  @Output('gameNumber') numbreEvent =  new EventEmitter<{numbre: number, type: string}>();
  myTimer;
  constructor() { }

  ngOnInit() {
  }


  onStartGame() {
    this.isGameEnabled = true;
    this.myTimer = setInterval(this.doIncrementNumber(), 1000);
  }

  onStopGame() {
    this.isGameEnabled = false;
    clearInterval(this.myTimer);
  }

  doIncrementNumber(){
    if(this.isGameEnabled){
      this.numbre += this.numbre;
    }
    this.numbreEvent.emit({
      numbre: this.numbre,
      type: this.numbre%2 == 0 ? 'even' : 'odd'

    });
  }
}
