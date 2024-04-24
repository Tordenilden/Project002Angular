import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Samurai } from 'src/app/models/samurai/Samurai';
import { GenericService } from 'src/app/services/generic.service';

@Component({
  selector: 'app-samurai2',
  templateUrl: './samurai2.component.html',
  styleUrls: ['./samurai2.component.css']
})
export class Samurai2Component {

//Formdata
  samuraiForm: FormGroup = new FormGroup({
    id : new FormControl(''), // this can be a mistake, maybe I ask U bout it later
    name: new FormControl(''),
    description: new FormControl(''),
    age: new FormControl(''),
  });

  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
  });

  create(): void{
    console.log(this.samuraiForm.value); // this can be accessed in 4 or 6 different ways

  }


  ngOnInit(): void{
    this.service.getAll().subscribe(data => {
      // this.samuraiList = data;
      console.log(data)
      // console.log(this.samuraiList);
    });// end subscribe
  }// end ngOnInit

  constructor(private service: GenericService<Samurai>) {}


}
