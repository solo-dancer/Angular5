import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  serverId: number = 10;
  serverStatus: string = "offline";
  allowNewServer: boolean = false;
  serverCreationStatus : string = "No server was created";
  serverName: string = 'testServer';

  getServerStatus() {
    return this.serverStatus;
  }

  constructor() {

    setTimeout(() => {
      this.allowNewServer =  true;
    }, 2000)

  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreationStatus
        = "The Server was created , with Name : " + this.serverName;
  }

  onUpdateServerName(event: Event) {
    console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;

  }
}
