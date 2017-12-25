import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  userName : string = '';
  isUserNameEmpty : boolean = (this.userName == '');

  onUpdateUsername(event: Event){

    this.userName = (<HTMLInputElement>event.target).value;
    this.isUserNameEmpty = (this.userName == '');
  }


}
