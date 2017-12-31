import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component, ContentChild,
  DoCheck,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges, ViewChild,
  ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated //None, Native
})
export class ServerElementComponent implements
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {

 @Input('srvElement') element: {type: string, name:string, content:string};
 @Input() name: string;
 @ViewChild('heading') header: ElementRef;
 @ContentChild('contentParagraph') paragraph: ElementRef;

  constructor() {
    console.log("Constructor called");
  }

  ngOnChanges(changes :SimpleChanges) {
    console.log("NG On Changes called : " + changes);
  }

  ngOnInit() {
    console.log("NG On InIt called");
    console.log("The Header : " +  this.header.nativeElement.textContent);
    console.log("The Content of Paragraph : " +  this.paragraph.nativeElement.textContent);
  }

  ngDoCheck() {
    console.log("NG Do Check");
  }

  ngAfterContentInit(){
    console.log("NG After Content Init Called");
  }
  ngAfterContentChecked(){
    console.log("NG After Content Checked Called");
  }

  ngAfterViewInit(){
    console.log("NG After View Init Called");
    console.log("The Header : " +  this.header.nativeElement.textContent);
    console.log("The Content of Paragraph : " +  this.paragraph.nativeElement.textContent);
  }

  ngAfterViewChecked(){
    console.log("NG After View Checked Called");
  }

  ngOnDestroy(){
    console.log("NG On destroy called");
  }
}
