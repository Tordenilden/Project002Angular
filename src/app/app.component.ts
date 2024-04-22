import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // variable name : Type = value
  title = 'samuraiProject002'; //javascript
  //string s = "samuraiProject002";
  name: string = "Flemming"; //typescript
  age : number = 25;
  sand: boolean = true;

  list: string[] = ["one", "two", "three"];

  ngOnInit(): void{
    console.log("first test");
    console.log(this.list);


    //Invoke a function
    this.create(); // this is a "pointer" to the object

  }
  //function
  create(): void{
    console.log("Create function called");
  }
}
