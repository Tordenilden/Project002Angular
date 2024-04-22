import { Component } from '@angular/core';
import { Samurai } from 'src/app/models/samurai/Samurai';
import { SamuraiService } from 'src/app/services/samurai.service';

@Component({
  selector: 'app-samurai',
  templateUrl: './samurai.component.html',
  styleUrls: ['./samurai.component.css']
})
export class SamuraiComponent {
  samurai : Samurai = {};
  samuraiList : Samurai[] = [];
  //version 2
  samuraiList2 : Samurai[] = [
    {Id:1, Name:"Flemming", Description:"The best", Age:25},
    {Id:2, Name:"Erik", Description:"The best man in world", Age:125},
    {Id:3, Name:"Bodil", Description:"The most empathic person", Age:125}
  ];

  ngOnInit(): void{
    // this.samurai = {
    //   Id: 1,
    //   Name: "Flemming",
    //   Description: "The best",
    //   Age: 25
    // }
//version 1
    // this.samuraiList = [
    //   {Id:1, Name:"Flemming", Description:"The best", Age:25},
    //   {Id:2, Name:"Erik", Description:"The best man in world", Age:125},
    //   {Id:3, Name:"Bodil", Description:"The most empathic person", Age:125}
    // ];
    // console.log(this.samuraiList2);
//version 3
    // this.samuraiList = this.service.getAll();
    // console.log(this.samuraiList);
//version 4
    this.service.getAll().subscribe(data => {
      this.samuraiList = data;
      console.log(data)
      console.log(this.samuraiList);

    });
    //console.log(this.samuraiList);
  }// end ngOnInit

  /**
   *
   */
  constructor(private service: SamuraiService) {


  }
  //version 2
getAll(): void{
  console.log(this.samuraiList2);
}//end getAll

//version 3
getAll3(): void{

}
} // end class
