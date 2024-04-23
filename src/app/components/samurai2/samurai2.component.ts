import { Component } from '@angular/core';
import { Samurai } from 'src/app/models/samurai/Samurai';
import { GenericService } from 'src/app/services/generic.service';

@Component({
  selector: 'app-samurai2',
  templateUrl: './samurai2.component.html',
  styleUrls: ['./samurai2.component.css']
})
export class Samurai2Component {

  ngOnInit(): void{
    this.service.getAll().subscribe(data => {
      // this.samuraiList = data;
      console.log(data)
      // console.log(this.samuraiList);
    });// end subscribe
  }// end ngOnInit

  constructor(private service: GenericService<Samurai>) {}


}
