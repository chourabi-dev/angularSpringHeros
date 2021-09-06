import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-data-preview',
  templateUrl: './data-preview.component.html',
  styleUrls: ['./data-preview.component.css']
})
export class DataPreviewComponent implements OnInit {

  constructor(private data:DataService) { }

  ngOnInit(): void {
    console.log(this.data.getData());
    
  }

}
