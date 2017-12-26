import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
    .clicko{
      color: white;
    }`

  ]
})
export class AppComponent {
  title = 'app';

  isEnabled : boolean = false;
  clickArray = [];
  clickCount: number = 0;

  onClicked(){
    if(this.isEnabled == true)
      this.isEnabled = false;
    else
      this.isEnabled = true;
    this.clickArray.push(++this.clickCount);
  }

  getColor(clicko: number){
    if(clicko > 5)
      return 'blue';
    else 'white';
  }
}
