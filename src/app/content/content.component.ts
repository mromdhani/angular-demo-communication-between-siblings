import { Component, OnInit } from '@angular/core';
import { DataSharingService } from '../services/data-sharing.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  data: string;

  constructor(private _service: DataSharingService) { }

  ngOnInit(): void {
    this._service.currentMessage.subscribe(message => this.data = message);

  }
}
