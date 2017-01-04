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

  constructor(private logger: LoggingService) { }

  logIt(){
    this.logger.log();
  }

  ngOnInit() {
    this.logger.fetchData().subscribe(
      (data: Response)=>{
        console.log(data.json());
      }
    );
  }

}
