import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css']
})
export class DirectoryComponent implements OnInit {
  ninjas = [
    {
      name: 'Yoshi',
      belt: 'black'
    },
    {
      name: 'Ryu',
      belt: 'red'
    },
    {
      name: 'Crystal',
      belt: 'purple'
    }
  ]

  myApi: any[];

  pokemon: any[] = [];

  constructor(private logger: LoggingService) { }

  logIt(){
    this.logger.log();
  }

  ngOnInit() {
    this.logger.fetchData().subscribe(
      (data)=>{
        console.log(data);
      }
    );

    this.logger.getMyApi().subscribe(
      (stuff)=>{
        console.log(stuff.json());
        this.myApi = stuff.json();
      }
    );
  }

}
