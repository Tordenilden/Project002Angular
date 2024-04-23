import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Samurai } from '../models/samurai/Samurai';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
//I want it to fit all Components or almost all...
// make some notes!!
export class GenericService<Gulerodentity> {

  // http://localhost:7221/api/
  urlNew: string = environment.apiUrl + 'Samurai';
  constructor(private http: HttpClient) {
}
getAll(): Observable<Gulerodentity[]>{
  return this.http.get<Gulerodentity[]>(this.urlNew);
}
 // http://localhost:7221/api/Samurai/1
delete(name:string,entityToDelete:number): boolean{
  // this.http.delete(this.urlNew);
  // this.http.delete("http://localhost:7221/api/Samurai/"+entityToDelete);
  this.http.delete("http://localhost:7221/api/"+name+"/"+entityToDelete);
  return true;
}

}//class
