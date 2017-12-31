import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated =  new EventEmitter<{serverName: string, serverContent: string}>();
  @Output('bpCreated') blueprintCreated =  new EventEmitter<{serverName: string, serverContent: string}>();;
  //newServerName = '';
  @ViewChild('serverContent') newServerContent: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  onAddServer(serverNameInput: HTMLInputElement) {
    this.serverCreated.emit({
      serverName: serverNameInput.value,
      serverContent: this.newServerContent.nativeElement.value
    });
  }

   onAddBlueprint(blueprintNameInput: HTMLInputElement) {
    this.blueprintCreated.emit({
      serverName: blueprintNameInput.value,
      serverContent: this.newServerContent.nativeElement.value
    });
  }

}
