import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class LoggingService {
  log(){
    console.log("I am the logging service");
  }
  constructor(private http: Http) { }

  fetchData(){
    return this.http.get('http://pokeapi.co/api/v2/pokemon/1').map((response: Response)=>{
      return response.json();
    });
  }

}
