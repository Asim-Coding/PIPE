import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = "Angular pipe  pratice work";
  today = Date();
  capString(item:string){
    return item.toUpperCase()
  }
  user = {
    name: 'asif', age: 23
  }
}

