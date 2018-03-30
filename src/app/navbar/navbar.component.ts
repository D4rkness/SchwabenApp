import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  NAVPOSITION = NavPosition;
  accNavPosition = NavPosition.LISTE;

  constructor() { }

  ngOnInit() {
  }

  public setAccNavPosition(position: NavPosition) {
    this.accNavPosition = position;
  }
  public getNavPosition(): NavPosition {
    return this.accNavPosition;
  }

}


export enum NavPosition {
  LISTE,  STATISKTIK, PREISE, FINANZEN
}
