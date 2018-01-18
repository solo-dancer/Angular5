import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NumberGame';

  oddArray : number[] =[];
  evenArray : number[] =[];

  onRecieveEmit(emitRecv: {numbre: number, kind: string}){
    if (emitRecv.kind == 'even'){
      this.evenArray.push(emitRecv.numbre);
    }
    else {
      this.oddArray.push(emitRecv.numbre);
    }
  }
}


