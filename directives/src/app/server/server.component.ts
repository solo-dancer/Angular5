import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [`
    .user {
      background-color: deeppink;
    }`

  ]
})
export class ServerComponent implements OnInit {

  userName : string = '';
  userCreated : boolean = false;

  constructor() {}

  ngOnInit() {
  }

  getColor() {
    return this.userCreated == true ? 'green' : 'red';
  }
}
