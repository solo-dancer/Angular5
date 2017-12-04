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

}
