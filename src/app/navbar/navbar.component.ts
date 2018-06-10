import { Component, OnInit } from '@angular/core';
import { DataSharingService } from '../services/data-sharing.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  // tslint:disable-next-line:no-inferrable-types
  data: string = '';

  constructor(private _service: DataSharingService) { }

  ngOnInit(): void {
    this._service.currentMessage.subscribe(message => this.data = message);

  }
  // newMessage() {
  // tslint:disable-next-line:use-life-cycle-interface
  ngOnChanges() {
    this._service.changeMessage(`From Sibling : ${this.data}`);
   }
  envoyerChangements() {
    this._service.changeMessage(`${this.data}`);
  }

}
