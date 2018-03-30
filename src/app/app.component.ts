import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'app';
  NAVPOSITION = NavPosition;

  accNavPosition = NavPosition.LISTE;


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

