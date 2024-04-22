import { Injectable } from '@angular/core';
import { Samurai } from '../models/samurai/Samurai';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SamuraiService {

  url:string = "https://localhost:7221/api/Samurai";
  constructor(private http: HttpClient) { }

  getAll(): Observable<Samurai[]>{
    return this.http.get<Samurai[]>(this.url);
  }



  //version 3
  // getAll(): Samurai[] {
  //   return [
  //     {Id:1, Name:"Flemming", Description:"The best", Age:25},
  //     {Id:2, Name:"Erik", Description:"The best man in world", Age:125},
  //     {Id:3, Name:"Bodil", Description:"The most empathic person", Age:125}
  //   ];
  // }
}
