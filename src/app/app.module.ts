import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


import { AppComponent } from './app.component';
import {NavbarComponent} from './navbar/navbar.component';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import { AllUserComponent } from './all-user/all-user.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { PriceListComponent } from './price-list/price-list.component';
import { FinanceManagementComponent } from './finance-management/finance-management.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AllUserComponent,
    StatisticsComponent,
    PriceListComponent,
    FinanceManagementComponent
  ],
  imports: [
    NgbModule.forRoot(),
    AngularFontAwesomeModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
